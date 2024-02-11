import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

import { useContacts } from "./context/ContactsProvider";
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

import socketIo from "socket.io-client";
const ENDPOINT = "https://portfolio-oemh.onrender.com";

let socket;
const Conversation = ({ user }) => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();

  const send = () => {
    const message = messageRef.current.value;
    console.log(message);
    socket.emit("message", { message, id });
    messageRef.current.value = "";
  };
  console.log(messages);
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setId(socket.id);
    });

    console.log(socket);
    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);
  return (
    <div className="flex justify-center items-center min-h-screen w-3/4">
      <div id="chatPage " className="w-full flex justify-center">
        <div
          id="chatBox"
          className="mt-24 mb-2 h-[600px]  w-3/4  border-2  border-white box-border"
        >
          <div
            id="chatHeader"
            className="border-b  h-[75px] flex justify-between items-center px-2 text-sm gap-5"
          >
            <p>Conversation with Vishal</p>
            <div className="flex flex-col items-center">
              <p className="">Your Username: {user}</p>
            </div>
          </div>
          <ReactScrollToBottom
            id="chatLogs"
            className="h-[450px] overflow-y-auto bg-gray-500/10 text-sm"
          >
            {messages.map((item, index) => (
              <Message
                key={index}
                message={item.message}
                user={item.id === id ? "" : item.user}
              />
            ))}
            {}
          </ReactScrollToBottom>
          <div
            id="chatInput"
            className="border-t h-[75px] flex items-center gap-5 justify-center text-sm"
          >
            <input
              type="text"
              name=""
              id=""
              ref={messageRef}
              placeholder="Write a message"
              className="h-[50px] w-3/4 ml-2 placeholder:pl-2"
              onKeyPress={(event) => {
                event.key === "Enter" ? send() : null;
              }}
            />
            <button
              className="bg-white text-black rounded-md py-1 w-[50px] mr-1 h-[40px] hover:bg-gray-300 duration-200"
              onClick={send}
            >
              <div className="flex justify-center hover:translate-x-2 duration-200">
                <IoMdSend className="text-2xl " />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
