import React, { FC } from "react";
import image1 from "@/public/assets/footerImage1.svg";
import image2 from "@/public/assets/footerImage2.svg";
import image3 from "@/public/assets/footerImage3.svg";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 w-full lg:items-end  ">
      <ul className="flex flex-col text-fontBlack gap-4">
        <li className="font-semibold ">Consectetur</li>
        <li className="text-fontBlack/50">Adipiscing</li>
        <li className="text-fontBlack/50">Elit</li>
        <li className="text-fontBlack/50">Eiusmod</li>
      </ul>

      <ul className="flex flex-col text-fontBlack gap-4">
        <li className="font-semibold ">Tempor</li>
        <li className="text-fontBlack/50">Incididunt</li>
        <li className="text-fontBlack/50">Labore</li>
        <li className="text-fontBlack/50">Dolore</li>
      </ul>

      <ul className="flex flex-col text-fontBlack gap-4">
        <li className="font-semibold ">Magna</li>
        <li className="text-fontBlack/50">Aliqua</li>
        <li className="text-fontBlack/50">Minim</li>
        <li className="text-fontBlack/50">Veniam</li>
      </ul>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image src={image1} alt="image 1" />
          <Image src={image2} alt="image 2" />
          <Image src={image3} alt="image 3" />
        </div>
        <p className="text-fontBlack/50">
          &copy; Uncle James 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
