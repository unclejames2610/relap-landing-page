import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center mx-auto p-4 lg:px-12 xl:px-36 justify-between bg-white lg:bg-transparent">
      {/* logo */}
      <h3 className="text-black lg:text-white font-poppins uppercase font-bold text-2xl lg:text-[40px] lg:leading-[48px]">
        relap
      </h3>

      {/* nav items */}
      <div className="items-center gap-12 text-white hidden lg:flex font-semibold ">
        <div
        // to="home" spy={true} smooth={true} offset={-50} duration={1000}
        >
          Home
        </div>
        <div
        //   to="features"
        //   spy={true}
        //   smooth={true}
        //   offset={-50}
        //   duration={1000}
        >
          Features
        </div>
        <div
        // to="works" spy={true} smooth={true} offset={-50} duration={1000}
        >
          Works
        </div>
        <div
        // to="about" spy={true} smooth={true} offset={-50} duration={1000}
        >
          About
        </div>
        <div
        // to="people" spy={true} smooth={true} offset={-50} duration={1000}
        >
          People
        </div>
        <div
        // to="news" spy={true} smooth={true} offset={-50} duration={1000}
        >
          News
        </div>
      </div>

      {/* button */}
      <div
      // to="contact-us"
      // spy={true}
      // smooth={true}
      // offset={-50}
      // duration={1000}
      >
        <button className="border bg-transparent text-white p-2 px-10 border-white/30 rounded-full font-bold hidden lg:block">
          Contact Us
        </button>
      </div>

      <FaBars className="text-secondary text-xl cursor-pointer lg:hidden" />
    </div>
  );
};

export default Navbar;
