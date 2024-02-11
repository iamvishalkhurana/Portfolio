import React, { useRef, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { useContacts } from "./context/ContactsProvider";

export default function ContactForm({ showForm }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const handleSubmit = (event) => {
    event.preventDefault();

    createContact(idRef.current, nameRef.current);

    showForm(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center border-black">
      <div className="bg-white/50 p-8 rounded shadow-lg w-1/2 md:w-[400px] h-1/2 justify-between  ">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Create contact</h1>
          <div className=" text-xl text-black cursor-pointer">
            <RxCross1
              onClick={() => {
                showForm(false);
              }}
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-10 justify-start"
        >
          <label htmlFor="name">
            <h2 className="py-1">Enter Name</h2>
            <input
              type="text"
              name="name"
              ref={nameRef}
              required
              className="text-white p-1 rounded-sm"
            />
          </label>
          <label htmlFor="id">
            <h2 className="py-1">Enter Id</h2>
            <input
              type="text"
              name="id"
              ref={idRef}
              required
              className="text-white p-1 rounded-sm"
            />
          </label>

          <button
            type="submit"
            className="text-white text-sm bg-black/60 w-fit py-1 px-2 rounded-xl shadow-lg"
          >
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
}
