import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets/";
import { logoVK } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl ">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoVK}
            alt="logo"
            className=" w-9 h-9 object-contain rounded-full "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer mx-2">
            Vishal Khurana{" "}
            <span className="mx-2 md:inline-block hidden">|</span>
            <span className="mx-2 md:inline-block hidden">Web Developer</span>
          </p>
        </Link>
        <ul className="list-none text-white hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {window.location.pathname === "/" ? (
                <a href={`#${link.id}`}>{link.title}</a>
              ) : (
                <Link to="/">{link.title}</Link>
              )}
            </li>
          ))}
          <li
            className={`${
              active === "chat" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] cursor-pointer font-medium`}
            onClick={() => {
              setActive("chat");
            }}
          >
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
        {/*mobile navigation*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none text-white flex justify-end items-start flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }  font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
