"use client";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import image1 from "@/public/assets/newsImage.svg";
import image2 from "@/public/assets/newsImage2.svg";
import FadeIn from "./FadeIn";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const News: FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariant: Variants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        type: "tween",
        delay: 1.0,
        ease: [0.25, 0.25, 0.25, 0.75],
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <div
      className="flex flex-col lg:flex-row justify-between p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full gap-8 lg:gap-16 bg-customPink lg:items-center"
      id="news"
    >
      {/* writing */}
      <div className="flex flex-col gap-6 items-start text-fontBlack">
        <FadeIn delay={0.2} direction="right">
          <h5 className="uppercase font-bold font-poppins">Nisi ut aliquid</h5>
        </FadeIn>

        <FadeIn delay={0.4} direction="right">
          <h2 className="font-bold font-poppins lg:text-[56px] lg:leading-[64px] text-fontBlack text-[40px] leading-[48px] lg:w-[466px]">
            Omnis voluptas assumenda
          </h2>
        </FadeIn>

        <FadeIn delay={0.6} direction="right">
          <p className="md:w-[470px]">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="right">
          <button className="bg-secondary rounded-full text-white py-2 px-16 font-bold border border-secondary hover:bg-transparent hover:text-secondary duration-500 transition-all">
            Our blog
          </button>
        </FadeIn>
      </div>

      {/* image */}
      <div ref={ref}>
        <motion.div
          className="relative"
          variants={containerVariant}
          initial="hidden"
          animate={controls}
        >
          <Image src={image1} alt="image 1" />
          <div className="flex items-start flex-col gap-4 lg:gap-6 absolute left-8 bottom-8 md:bottom-12 md:left-12">
            <motion.h4
              className="text-white font-poppins text-2xl font-bold"
              variants={itemVariant}
            >
              Itaque earum rerum
            </motion.h4>
            <motion.p
              className="text-white/50 sm:w-[474px]"
              variants={itemVariant}
            >
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <Image src={image2} alt="image 2" />
              <p className="text-white font-semibold">Adaora Azubuike</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
