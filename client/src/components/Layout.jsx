import React, { useEffect, useState } from "react";

import {
  About,
  Contact,
  Navbar,
  Tech,
  Hero,
  Feedbacks,
  Experience,
  Works,
} from "../components";

import { StarsCanvas } from "../components/canvas";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsMobile(false); // Not mobile screen
      } else {
        setIsMobile(true); // Mobile screen
      }
    };

    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return (
    <div className="relative z-0 bg-primary">
      <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {!isMobile && <Tech />}
      <Works />
      {/* <Feedbacks /> */}

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Layout;
