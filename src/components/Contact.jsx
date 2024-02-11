import React from "react";
import { motion } from "framer-motion";
import { StarsCanvas, EarthCanvas } from "./canvas";
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { arrow } from "../assets";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { linkedin, gmail, github } from "../assets";

const Contact = () => {
  const FormRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_fshq4yv",
        "template_mag6962",
        {
          from_name: form.name,
          to_name: "Vishal",
          from_email: form.email,
          to_email: "rckstrcrew@gmail.com",
          message: form.message,
        },
        "Kv7QgeNhHUrFyL1BR"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I'll get back to you as soon as possible");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      };
  };

  return (
    <div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.8] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.heroSubText}`}>Get in touch</p>
          <h3 className={`${styles.heroHeadText}`}>Contact.</h3>

          <form
            ref={FormRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className=" flex gap-10 mt-10 items-center w-1/4 justify-center">
        <a
          href="https://www.linkedin.com/in/vishal-khurana-867632223/"
          target="_blank"
        >
          <img src={linkedin} alt="" className="w-20" />
        </a>
        <a href="https://github.com/iamvishalkhurana" target="_blank">
          <img src={github} alt="" className="w-20" />
        </a>
        <a href="mailto:khuranavishal000@gmail.com" target="_blank">
          <img src={gmail} alt="" className="w-16" />
        </a>
      </div>
      <div className=" flex justify-end items-center w-full mr-10">
        <div className="mt-5 w-fit border-2 border-white bg-black/60 flex items-center p-2">
          <Link to="/chat">
            <img src={arrow} alt="" className="w-40 rotate-18" />
          </Link>
          <p className="font-bold text-sm md:text-xl">
            Chat Feature Coming Soon!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
