import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import Computers from "../components/canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] -mb-5 md:h-screen md:mb-0 mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Vishal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Responsive websites, User
            <br className="sm:block hidden" />
            interfaces and faster web applications.
          </p>
        </div>
      </div>
      <Computers />
      <div
        href="#about"
        className=" absolute md:-bottom-0 bottom-28 w-full flex justify-center items-center"
      >
        <div>
          <a
            href="#about"
            className="w-[30px] h-[40px] md:w-[35px] md:h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 "
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-2 md:w-4 md:h-3 rounded-full mb-1 bg-secondary"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
