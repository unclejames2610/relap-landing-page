import Image from "next/image";
import React from "react";
import image1 from "@/public/assets/peopleImage1.svg";
import image2 from "@/public/assets/peopleImage2.svg";
import image3 from "@/public/assets/peopleImage3.svg";
import icon1 from "@/public/assets/peopleIcon1.svg";
import icon2 from "@/public/assets/peopleIcon2.svg";
import icon3 from "@/public/assets/peopleIcon3.svg";
import icon4 from "@/public/assets/peopleicon4.svg";
import icon5 from "@/public/assets/peopleIcon5.svg";
import icon6 from "@/public/assets/peopleIcon6.svg";

const People = () => {
  return (
    <div
      className="flex flex-col p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full gap-8 lg:gap-16"
      id="people"
    >
      {/* writing */}
      <div className="flex items-center flex-col gap-5">
        <h2 className="font-bold font-poppins lg:text-[56px] lg:leading-[64px] text-fontBlack text-[40px] leading-[48px]">
          Officis debitis
        </h2>
        <h5 className="font-semibold text-fontBlcak text-center md:w-[570px]">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repella.
        </h5>
      </div>

      {/* cards */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]">
            <Image src={image1} alt="image 1" />
            <p className="text-fontBlack/50">
              "Voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis"
            </p>
            <p>Evelyn Allen</p>
          </div>

          <div className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]">
            <Image src={image2} alt="image 2" />
            <p className="text-fontBlack/50">
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores"
            </p>
            <p>Malin Quist</p>
          </div>

          <div className="flex flex-col p-4 shadow-lg bg-white gap-6 w-[250px] sm:w-[370px] lg:w-[300px]">
            <Image src={image3} alt="image 3" />
            <p className="text-fontBlack/50">
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci numquam eius"
            </p>
            <p>Pan Su</p>
          </div>
        </div>
      </div>

      {/* icons */}
      <div className="flex flex-wrap justify-between items-center gap-8 mt-12 opacity-50">
        <Image src={icon1} alt="icon 1" />
        <Image src={icon2} alt="icon 2" />
        <Image src={icon3} alt="icon 3" />
        <Image src={icon4} alt="icon 4" />
        <Image src={icon5} alt="icon 5" />
        <Image src={icon6} alt="icon 6" />
      </div>
    </div>
  );
};

export default People;
