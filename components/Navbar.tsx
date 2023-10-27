"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ navOpen, setNavOpen }) => {
  return (
    <div
      className={`flex flex-col mx-auto p-4 lg:px-12 xl:px-36  bg-white lg:bg-transparent gap-8 h-16 lg:h-auto 
      }`}
    >
      <div className="flex items-center justify-between">
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
        <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <button className="border bg-transparent text-white p-2 px-10 border-white/30 rounded-full font-bold hidden lg:block hover:bg-white/30 hover:text-white transition-all duration-500">
            Contact Us
          </button>
        </Link>

        {navOpen ? (
          <AiOutlineClose
            className="text-secondary text-xl cursor-pointer lg:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        ) : (
          <FaBars
            className="text-secondary text-xl cursor-pointer lg:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
