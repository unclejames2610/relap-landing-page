import Image from "next/image";
import React, { FC } from "react";
import icon1 from "@/public/assets/peopleIcon1.svg";
import icon2 from "@/public/assets/peopleIcon2.svg";
import icon3 from "@/public/assets/peopleIcon3.svg";
import icon4 from "@/public/assets/peopleicon4.svg";
import icon5 from "@/public/assets/peopleIcon5.svg";
import icon6 from "@/public/assets/peopleIcon6.svg";
import PeopleCards from "./PeopleCards";

const People: FC = () => {
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
        <PeopleCards />
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
