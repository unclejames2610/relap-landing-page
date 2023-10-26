"use client";
import React, { FC } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar: FC = () => {
  return (
    <div className="flex items-center mx-auto p-4 lg:px-12 xl:px-36 justify-between bg-white lg:bg-transparent">
      {/* logo */}
      <h3 className="text-black lg:text-white font-poppins uppercase font-bold text-2xl lg:text-[40px] lg:leading-[48px]">
        relap
      </h3>

      {/* nav items */}
      <div className="items-center gap-12 text-white hidden lg:flex font-semibold ">
        <Link
          to="homepage"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          Features
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          Works
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          About
        </Link>
        <Link
          to="people"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          People
        </Link>
        <Link
          to="news"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="cursor-pointer hover:text-[#FFC300] transition-all duration-500"
        >
          News
        </Link>
      </div>

      {/* button */}
      <Link to="contact-us" spy={true} smooth={true} offset={0} duration={1000}>
        <button className="border bg-transparent text-white p-2 px-10 border-white/30 rounded-full font-bold hidden lg:block hover:bg-white/30 hover:text-white transition-all duration-500">
          Contact Us
        </button>
      </Link>

      <FaBars className="text-secondary text-xl cursor-pointer lg:hidden" />
    </div>
  );
};

export default Navbar;
