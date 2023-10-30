"use client";
import React, { FC, useEffect, useRef } from "react";
import image1 from "@/public/assets/peopleImage1.svg";
import image2 from "@/public/assets/peopleImage2.svg";
import image3 from "@/public/assets/peopleImage3.svg";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const PeopleCards: FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariant: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        type: "tween",
        delay: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const gridVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
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
    <div ref={ref}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={gridVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]"
          variants={cardVariant}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariant}>
            <Image src={image1} alt="image 1" />
          </motion.div>

          <motion.p className="text-fontBlack/50" variants={itemVariant}>
            "Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis"
          </motion.p>
          <motion.p variants={itemVariant}>Evelyn Allen</motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]"
          variants={cardVariant}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariant}>
            <Image src={image2} alt="image 2" />
          </motion.div>

          <motion.p className="text-fontBlack/50" variants={itemVariant}>
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores"
          </motion.p>
          <motion.p variants={itemVariant}>Malin Quist</motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]"
          variants={cardVariant}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariant}>
            <Image src={image3} alt="image 3" />
          </motion.div>

          <motion.p className="text-fontBlack/50" variants={itemVariant}>
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci numquam eius"
          </motion.p>
          <motion.p variants={itemVariant}>Pan Su</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PeopleCards;
