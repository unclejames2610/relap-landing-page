import React from "react";

const People = () => {
  return (
    <div className="flex items-center flex-col p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full gap-8 lg:gap-16">
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
      <div></div>
    </div>
  );
};

export default People;
