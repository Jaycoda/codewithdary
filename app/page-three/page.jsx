import React from "react";
import FlexGrids from "../components/FlexGrids";
import BentoGrid from "../components/BentoGrid";

const page = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-full">
      <FlexGrids />
      <BentoGrid />
    </div>
  );
};

export default page;
