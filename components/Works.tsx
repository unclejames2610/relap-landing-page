import React, { FC } from "react";
import WorksGrid from "./WorksGrid";

const Works: FC = () => {
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

      <WorksGrid />
    </div>
  );
};

export default Works;
