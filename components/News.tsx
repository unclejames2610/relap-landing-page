import Image from "next/image";
import React from "react";
import image1 from "@/public/assets/newsImage.svg";
import image2 from "@/public/assets/newsImage2.svg";

const News = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full gap-8 lg:gap-16 bg-customPink lg:items-center"
      id="news"
    >
      {/* writing */}
      <div className="flex flex-col gap-6 items-start text-fontBlack">
        <h5 className="uppercase font-bold font-poppins">Nisi ut aliquid</h5>
        <h2 className="font-bold font-poppins lg:text-[56px] lg:leading-[64px] text-fontBlack text-[40px] leading-[48px] lg:w-[466px]">
          Omnis voluptas assumenda
        </h2>
        <p className="md:w-[470px]">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est.
        </p>
        <button className="bg-secondary rounded-full text-white py-2 px-16">
          Our blog
        </button>
      </div>

      {/* image */}
      <div className="relative">
        <Image src={image1} alt="image 1" />
        <div className="flex items-start flex-col gap-4 lg:gap-6 absolute left-8 bottom-8 md:bottom-12 md:left-12">
          <h4 className="text-white font-poppins text-2xl font-bold">
            Itaque earum rerum
          </h4>
          <p className="text-white/50">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates
          </p>
          <div className="flex items-center gap-4">
            <Image src={image2} alt="image 2" />
            <p className="text-white font-semibold">Adaora Azubuike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
