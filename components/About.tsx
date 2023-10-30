"use client";
import React, { FC, useEffect, useRef } from "react";
import aboutSwirl from "@/public/assets/aboutSwirl.svg";
import image1 from "@/public/assets/aboutImage1.svg";
import image2 from "@/public/assets/aboutImage2.svg";
import image3 from "@/public/assets/aboutImage3.svg";
import image4 from "@/public/assets/aboutImage4.svg";
import image5 from "@/public/assets/aboutImage5.svg";
import aboutOvalBottom from "@/public/assets/aboutOvalBottom.svg";
import aboutOvalBR from "@/public/assets/aboutOvalBR.svg";
import aboutOvalTop from "@/public/assets/aboutOvalTop.svg";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import FadeIn from "./FadeIn";

const About: FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const circleVariant: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        type: "tween",
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className="flex items-center flex-col lg:flex-row justify-center lg:gap-24 bg-primary p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full relative overflow-hidden"
      id="about"
    >
      {/* illustration */}
      <div ref={ref}>
        <motion.div
          className="relative z-10"
          variants={circleVariant}
          initial="hidden"
          animate={controls}
        >
          <motion.div>
            <Image
              src={aboutSwirl}
              alt="about swirl"
              className="md:w-[470px] md:h-[470px] w-[297px] h-[297px]"
            />
          </motion.div>

          <motion.div variants={imageVariant}>
            <Image
              src={image1}
              alt="image1"
              className="absolute -left-2 md:-left-16 -top-8 w-[136px] h-[136px] md:w-auto md:h-auto"
            />
          </motion.div>

          <motion.div variants={imageVariant}>
            <Image
              src={image2}
              alt="image2"
              className="absolute right-4 lg:-right-6 top-4 w-[92px] h-[92px] md:w-auto md:h-auto"
            />
          </motion.div>

          <motion.div variants={imageVariant}>
            <Image
              src={image3}
              alt="image3"
              className="absolute right-0 md:right-4 bottom-24 w-[82px] h-[82px] md:w-auto md:h-auto"
            />
          </motion.div>
          <motion.div variants={imageVariant}>
            <Image
              src={image4}
              alt="image4"
              className="absolute right-16 md:right-28 bottom-4 md:-bottom-2 w-[82px] h-[82px] md:w-auto md:h-auto"
            />
          </motion.div>

          <motion.div variants={imageVariant}>
            <Image
              src={image5}
              alt="image5"
              className="absolute -left-4 lg:-left-10 bottom-16 w-[92px] h-[92px] md:w-auto md:h-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* writing */}
      <div className="flex flex-col items-start gap-10 z-10">
        <FadeIn delay={0.4} direction="left">
          <h5 className="font-bold text-white uppercase font-poppins">
            repellendus
          </h5>
        </FadeIn>

        <FadeIn delay={0.6} direction="left">
          <h2 className="font-bold lg:text-[56px] lg:leading-[64px] text-white text-[40px] leading-[48px] md:w-[359px]">
            Temporibus quibusdam
          </h2>
        </FadeIn>

        <FadeIn delay={0.8} direction="left">
          <p className="font-semibold md:w-[470px] text-white">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
        </FadeIn>

        <FadeIn delay={1.0} direction="left">
          <button className="font-bold py-2 px-12 rounded-full bg-[#FFC300] text-white border border-[#FFC300] hover:bg-transparent hover:text-[#FFC300] transition-all duration-500">
            Our team
          </button>
        </FadeIn>
      </div>

      <Image
        src={aboutOvalBottom}
        alt="oval bottom"
        className="absolute lg:-bottom-36 -bottom-56 lg:-left-8 -left-4"
      />

      <Image
        src={aboutOvalBR}
        alt="oval bottom center"
        className="absolute lg:-bottom-24 -bottom-20 -right-20 lg:left-[500px]"
      />

      <Image
        src={aboutOvalTop}
        alt="oval top"
        className="absolute lg:-top-16 -top-12 lg:left-[460px] -right-10 "
      />
    </div>
  );
};

export default About;
