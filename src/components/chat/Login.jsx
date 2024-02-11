import React, { useState, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
const Login = ({ setUser }) => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(nameRef.current.value);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" h-72 w-1/2 border-2 border-white bg-black/50  flex flex-col gap-8 items-center justify-center"
      >
        <div className="mt-4 flex justify-center gap-2 items-center">
          <CiLogin className="text-3xl " />
          <h1>Login</h1>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-col items-center gap-1 mx-2">
            <label htmlFor="name" className="text-sm md:text-lg">
              Enter your Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              className="w-full outline-none 
              placeholder:text-center placeholder:text-sm
              pl-1"
              placeholder="What should I call you"
              required
            />
          </div>

          <button
            className="hover:bg-gray-300 hover:text-black w-20 rounded-lg font-semibold  shadow-sm shadow-violet-400 bg-black text-white"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
