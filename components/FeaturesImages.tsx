"use client";
import React, { FC, useState } from "react";
import image1 from "@/public/assets/featuresImage1.svg";
import image2 from "@/public/assets/featuresImage2.svg";
import image3 from "@/public/assets/featuresImage3.svg";
import Image from "next/image";

const FeaturesImages: FC = () => {
  const [isHovered1, setHovered1] = useState<boolean>(false);

  const handleHover1 = () => {
    setHovered1(!isHovered1);
  };
  const [isHovered2, setHovered2] = useState<boolean>(false);

  const handleHover2 = () => {
    setHovered2(!isHovered2);
  };

  const [isHovered3, setHovered3] = useState<boolean>(false);

  const handleHover3 = () => {
    setHovered3(!isHovered3);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div
        className="flex justify-center items-center h-full relative cursor-pointer"
        onMouseEnter={handleHover1}
        onMouseLeave={handleHover1}
      >
        <Image src={image1} alt="image1" className="w-full h-auto" />
        {isHovered1 && (
          <div className="h-full w-full bg-black/50 absolute">
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <h4 className="font-poppins font-bold text-2xl text-white">
                  Exercitation
                </h4>
                <p className="text-white/50">Ullamco laboris </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="flex justify-center relative cursor-pointer items-center h-full"
        onMouseEnter={handleHover2}
        onMouseLeave={handleHover2}
      >
        <Image src={image2} alt="image2" className="w-full h-auto" />
        {isHovered2 && (
          <div className="h-full w-full bg-black/50 absolute">
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <h4 className="font-poppins font-bold text-2xl text-white">
                  Exercitation
                </h4>
                <p className="text-white/50">Ullamco laboris </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="flex justify-center items-center h-full relative cursor-pointer"
        onMouseEnter={handleHover3}
        onMouseLeave={handleHover3}
      >
        <Image src={image3} alt="image3" className="w-full h-auto" />
        {isHovered3 && (
          <div className="h-full w-full bg-black/50 absolute">
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <h4 className="font-poppins font-bold text-2xl text-white">
                  Exercitation
                </h4>
                <p className="text-white/50">Ullamco laboris </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesImages;
