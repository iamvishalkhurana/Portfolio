import React, { useState, useEffect, useMemo } from "react";
import { StarsCanvas } from "../canvas";
import Navbar from "../Navbar";
import Login from "./Login";
import Conversation from "./Conversation";

export default function Chat() {
  const [user, setUser] = useState("");

  return (
    <>
      <Navbar />
      <StarsCanvas />
      <div className="flex justify-center">
        {user === "" ? (
          <Login setUser={setUser} />
        ) : (
          <Conversation user={user} />
        )}
      </div>
    </>
  );
}
