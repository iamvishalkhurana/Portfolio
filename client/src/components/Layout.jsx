import React from "react";

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
  return (
    <div className="relative z-0 bg-primary">
      <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
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
