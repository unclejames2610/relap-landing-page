"use client";
import React, { useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import homeImage from "@/public/assets/homeImage.svg";
import homeImage2 from "@/public/assets/homeimage.svg";
import Image from "next/image";
import { RxTriangleRight } from "react-icons/rx";

const HomeComponent = () => {
  const [p1, setp1] = useState(false);
  const [p2, setp2] = useState(false);
  const [p3, setp3] = useState(false);
  return (
    <div
      className="bg-white p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 flex flex-col lg:flex-row lg:items-center justify-between mx-auto gap-20 lg:gap-0 overflow-hidden"
      id="homepage"
    >
      {/* writing */}
      <div className="flex flex-col items-start gap-5">
        <h5 className="uppercase font-bold font-poppins text-fontBlack">
          Quis Autem
        </h5>
        <h2 className="font-poppins font-bold lg:text-[56px] lg:leading-[64px] lg:w-[498px] sm:w-[356px] text-[40px] leading-[48px]">
          Corporis suscipit laboriosam
        </h2>

        {/* paragraph 1 */}
        <div className="flex flex-col items-start gap-1">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setp1(!p1)}
          >
            <p className="font-semibold text-fontBlack">Totam rem aperiam</p>
            {p1 ? (
              <IoChevronUpSharp className="text-fontBlack text-lg" />
            ) : (
              <IoChevronDownSharp className="text-fontBlack text-lg" />
            )}
          </div>

          {p1 && (
            <p className="text-fontBlack/50 w-[470px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          )}
        </div>

        {/* paragraph 2 */}
        <div className="flex flex-col items-start gap-1">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setp2(!p2)}
          >
            <p className="font-semibold text-fontBlack">Eaque ipsa quae</p>
            {p2 ? (
              <IoChevronUpSharp className="text-fontBlack text-lg" />
            ) : (
              <IoChevronDownSharp className="text-fontBlack text-lg" />
            )}
          </div>

          {p2 && (
            <p className="text-fontBlack/50 w-[470px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          )}
        </div>

        {/* paragraph 3 */}
        <div className="flex flex-col items-start gap-1">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setp3(!p3)}
          >
            <p className="font-semibold text-fontBlack">Inventore veritatis</p>
            {p3 ? (
              <IoChevronUpSharp className="text-fontBlack text-lg" />
            ) : (
              <IoChevronDownSharp className="text-fontBlack text-lg" />
            )}
          </div>

          {p3 && (
            <p className="text-fontBlack/50 w-[470px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          )}
        </div>
      </div>

      {/*video  */}
      <div className="relative">
        <Image src={homeImage2} alt="home image" className="w-full" />
        <div className="bg-white shadow-lg lg:h-[116px] lg:w-[116px] h-[58px] w-[58px] rounded-full flex items-center justify-center absolute lg:-left-12 top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 left-1/2">
          <RxTriangleRight className="lg:text-5xl text-3xl text-secondary" />
        </div>
        {/* <div className="w-[355px] h-[272px] sm:w-[592px] sm:h-[470px] md:w-[650px] md:h-[510px] lg:w-[705px] lg:h-[544px] bg-[linear-gradient(45deg,_#C86DD7_0%,_#3023AE_100%)] relative">
          <Image
            src={homeImage}
            alt="video"
            className="absolute lg:left-8 lg:-top-8 left-4 -top-4 sm:left-6 sm:-top-6 w-[339px] h-[272px] sm:w-[568px] sm:h-[470px] md:w-[626px] md:h-[510px] lg:w-[672px] lg:h-[544px]"
          />
        
        </div> */}
      </div>
    </div>
  );
};

export default HomeComponent;
