import React from "react";
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

const About = () => {
  return (
    <div
      className="flex items-center flex-col lg:flex-row justify-center lg:gap-24 bg-primary p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full relative overflow-hidden"
      id="about"
    >
      {/* illustration */}
      <div className="relative z-10">
        <Image
          src={aboutSwirl}
          alt="about swirl"
          className="md:w-[470px] md:h-[470px] w-[297px] h-[297px]"
        />
        <Image
          src={image1}
          alt="image1"
          className="absolute -left-2 md:-left-16 -top-8 w-[136px] h-[136px] md:w-auto md:h-auto"
        />
        <Image
          src={image2}
          alt="image2"
          className="absolute right-4 lg:-right-6 top-4 w-[92px] h-[92px] md:w-auto md:h-auto"
        />
        <Image
          src={image3}
          alt="image3"
          className="absolute right-0 md:right-4 bottom-24 w-[82px] h-[82px] md:w-auto md:h-auto"
        />
        <Image
          src={image4}
          alt="image4"
          className="absolute right-16 md:right-28 bottom-4 md:-bottom-2 w-[82px] h-[82px] md:w-auto md:h-auto"
        />
        <Image
          src={image5}
          alt="image5"
          className="absolute -left-4 lg:-left-10 bottom-16 w-[92px] h-[92px] md:w-auto md:h-auto"
        />
      </div>
      {/* writing */}
      <div className="flex flex-col items-start gap-10 z-10">
        <h5 className="font-bold text-white uppercase font-poppins">
          repellendus
        </h5>
        <h2 className="font-bold lg:text-[56px] lg:leading-[64px] text-white text-[40px] leading-[48px] md:w-[359px]">
          Temporibus quibusdam
        </h2>
        <p className="font-semibold md:w-[470px] text-white">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est.
        </p>
        <button className="font-bold py-2 px-12 rounded-full bg-[#FFC300] text-white">
          Our team
        </button>
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
