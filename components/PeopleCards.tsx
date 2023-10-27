import React, { FC } from "react";
import image1 from "@/public/assets/peopleImage1.svg";
import image2 from "@/public/assets/peopleImage2.svg";
import image3 from "@/public/assets/peopleImage3.svg";
import Image from "next/image";

const PeopleCards: FC = () => {
  return (
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
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores"
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
  );
};

export default PeopleCards;
