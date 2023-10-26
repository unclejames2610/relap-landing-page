"use client";
import React from "react";

import FeaturesImages from "./FeaturesImages";

const Features = () => {
  return (
    <div
      className="flex flex-col p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full bg-customPink gap-10"
      id="features"
    >
      {/* writing */}
      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4 items-start text-fontBlack">
          <h5 className="uppercase font-bold font-poppins">Nisi ut aliquid</h5>
          <h1 className="font-bold font-poppins lg:text-[56px] text-[40px] leading-[48px] lg:leading-[64px] w-[431px]">
            Ullam corporis suscipit
          </h1>
        </div>

        <p className="text-fontBlack/50 md:w-[570px] text-justify">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center text-fontBlack/50 ">
        <p className="cursor-pointer font-semibold text-fontBlack ">
          Quis Autem
        </p>
        <p className="cursor-pointer ">Reprehenderit</p>
        <p className="cursor-pointer ">Voluptate</p>
        <p className="cursor-pointer ">Molestiae</p>
        <p className="cursor-pointer ">Consequatur</p>
      </div>

      <FeaturesImages />

      <div className="flex items-center justify-center">
        <button className="bg-secondary border border-secondary rounded-full py-2 px-16 font-bold text-white hover:bg-transparent hover:text-secondary transition-all duration-500">
          All works
        </button>
      </div>
    </div>
  );
};

export default Features;
