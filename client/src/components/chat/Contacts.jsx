import React from "react";
import { useContacts } from "./context/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ul className="flex flex-col justify-evenly items-center w-[400px]">
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name.value} = {contact.id.value}
        </li>
      ))}
    </ul>
  );
}
