import React from "react";

const Message = ({ user, message }) => {
  return (
    <div
      className={`z-1 w-1/2 p-2 m-2  rounded-xl inline-block ${
        user === "" ? "float-right" : ""
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`p-2 rounded-xl ${
            user === "" ? "bg-violet-500/80" : "bg-violet-100/80 text-black"
          }`}
        >
          {message}
        </div>
        <div
          className={`flex  ${
            user === "" ? "justify-end mr-2" : "justify-start ml-2"
          } text-xs`}
        >
          {user === "" ? "You" : user}
        </div>
      </div>
    </div>
  );
};

export default Message;
