import React from "react";
import Inputs from "../components/Inputs";
import ToDo from "../components/ToDo";

const page = () => {
  return (
    <div className="flex items-center flex-col  bg-gray-100 h-screen w-full">
      <Inputs />
      <ToDo />
    </div>
  );
};

export default page;
