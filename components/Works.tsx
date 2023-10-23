import React from "react";

import image1 from "@/public/assets/worksImage1.svg";
import image2 from "@/public/assets/worksImage2.svg";
import image3 from "@/public/assets/worksImage3.svg";
import image4 from "@/public/assets/worksImage4.svg";
import image5 from "@/public/assets/worksImage5.svg";
import image6 from "@/public/assets/worksImage6.svg";
import Image from "next/image";

const Works = () => {
  return (
    <div
      className="flex items-center flex-col p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full gap-8 lg:gap-16"
      id="works"
    >
      {/* writing */}
      <div className="flex items-center flex-col gap-5">
        <h2 className="font-bold font-poppins lg:text-[56px] lg:leading-[64px] text-fontBlack text-[40px] leading-[48px]">
          Fugiat quo
        </h2>
        <h5 className="font-semibold text-fontBlcak text-center md:w-[570px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </h5>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-4 py-12 cursor-pointer hover:shadow-xl">
          <Image src={image1} alt="image1" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Consequuntur
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit
          </p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image2} alt="image2" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Voluptatem
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam
          </p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image3} alt="image3" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Quisquam
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Quis nostrum exercitationem ullam corporis suscipit laboriosam
          </p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image4} alt="image4" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Aliquid
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Quis autem vel eum iure reprehenderit voluptate velit esse quam
            nihil
          </p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image5} alt="image5" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Excepteur
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Sint occaecat cupidatat non proident culpa qui officia deserunt
            mollit anim
          </p>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image6} alt="image6" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Accusamus
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
