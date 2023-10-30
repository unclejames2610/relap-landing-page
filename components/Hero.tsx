"use client";
import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import illustration from "@/public/assets/illustration.svg";
import facebookIcon from "@/public/assets/facebook-icon.svg";
import twitterIcon from "@/public/assets/twitter-icon.svg";
import igIcon from "@/public/assets/ig-icon.svg";
import oval from "@/public/assets/Oval.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface ListItemsProps {
  id: number;
  name: string;
  url: string;
}

const Hero: FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const listItems: ListItemsProps[] = [
    { id: 1, name: "Home", url: "homepage" },
    { id: 2, name: "Features", url: "features" },
    { id: 3, name: "Works", url: "works" },
    { id: 4, name: "About", url: "about" },
    { id: 5, name: "People", url: "people" },
    { id: 2, name: "News", url: "news" },
  ];

  const menuVariant = {
    hidden: {
      x: 100,
      y: -100,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      borderBottomLeftRadius: ["100%", "70%", "50%", "20%", "10%"],
      borderBottomRightRadius: "10%",

      transition: {
        duration: 0.8,
        when: "beforeChildren",
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-[linear-gradient(45deg,_#C86DD7_0%,_#3023AE_100%)] h-screen w-full mx-auto relative overflow-hidden">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen && (
        <motion.div
          className="lg:hidden font-semibold text-secondary text-center w-full absolute bg-white p-4 top-16 z-[100]"
          variants={menuVariant}
          animate="visible"
          initial="hidden"
        >
          {listItems.map((list) => (
            <motion.li
              key={list.id}
              variants={listVariant}
              className="cursor-pointer hover:text-[#FFC300] transition-all duration-500 pb-4 list-none"
            >
              <Link
                to={list.url}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                {list.name}
              </Link>
            </motion.li>
          ))}
          {/* <motion.div variants={listVariant}>
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
          </motion.div>
          <motion.div variants={listVariant}>
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
          </motion.div>
          <motion.div variants={listVariant}>
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
          </motion.div>
          <motion.div variants={listVariant}>
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
          </motion.div>
          <motion.div variants={listVariant}>
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
          </motion.div>
          <motion.div variants={listVariant}>
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
          </motion.div> */}

          <motion.button
            className="border bg-secondary text-white p-2 px-10 border-secondary rounded-full font-bold hover:bg-transparent hover:text-secondary transition-all duration-500"
            variants={listVariant}
          >
            <Link
              to="contact-us"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Contact Us
            </Link>
          </motion.button>
        </motion.div>
      )}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-2 lg:pt-16 lg:px-12 xl:px-36">
        {/* writing */}
        <div className="flex flex-col items-start p-2 gap-5 lg:gap-8">
          <FadeIn delay={0.2} direction="right">
            <h1 className="font-poppins font-bold text-[56px] leading-[64px] lg:text-[72px] lg:leading-[72px] lg:w-[335px] w-[261px] text-white">
              Omnis Voluptas
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="right">
            <p className="font-semibold text-white md:w-[346px] lg:w-[370px]">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} direction="right">
            <button className="rounded-full bg-[#FFC300] p-2 px-16 font-bold text-white border border-[#FFC300] hover:bg-transparent hover:text-[#FFC300] transition-all duration-500">
              Explore
            </button>
          </FadeIn>
        </div>
        {/* illustration */}

        <div className="z-10 relative">
          <FadeIn delay={0.2} direction="left">
            <Image
              src={illustration}
              alt="illustration"
              className="lg:w-[705px] lg:h-[791px]"
            />
          </FadeIn>

          <div className="rounded-full h-[59px] w-[59px] lg:h-[100px] lg:w-[100px] bg-[linear-gradient(45deg,_#C86DD7_0%,_#3023AE_100%)] absolute lg:-left-[50px] lg:bottom-40 -left-[30px] md:bottom-56 bottom-20 -z-10"></div>

          <div className="rounded-full h-[91px] w-[91px] lg:h-[156px] lg:w-[156px] bg-[linear-gradient(45deg,_#C86DD7_0%,_#3023AE_100%)] absolute right-2 top-8 -z-10"></div>
        </div>
      </div>

      <div className="flex items-center gap-4 absolute lg:bottom-8 bottom-2 md:bottom-4 right-16 lg:right-12 xl:right-36 p-8 z-20">
        <Image src={facebookIcon} alt="facebook" className="h-8 w-8" />
        <Image src={twitterIcon} alt="twitter" className="h-8 w-8" />
        <Image src={igIcon} alt="instagram" className="h-8 w-8" />
      </div>

      <Image
        src={oval}
        alt="oval"
        className="absolute -right-10 lg:right-0 lg:-bottom-[200px] -bottom-20 h-[232px] w-[232px] lg:h-[396px] lg:w-[396px]"
      />

      <div className="rounded-full h-[46px] w-[46px] lg:h-[78px] lg:w-[78px] bg-[linear-gradient(45deg,_#C86DD7_0%,_#3023AE_100%)] opacity-50 absolute lg:-right-[50px] -right-7 lg:top-8 z-20 top-64"></div>
    </div>
  );
};

export default Hero;
