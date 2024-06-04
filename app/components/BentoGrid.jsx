import React from "react";

const BentoGrid = () => {
  return (
    <div className="h-[42rem] w-full flex justify-center items-center bg-red-100 p-6">
      <div className="grid h-full w-full grid-cols-10 grid-row-4 gap-4 bg-yellow-100">
        <div className=" col-span-4 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Featured Work
        </div>
        <div className=" col-span-3 xl:col-span-4 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artist Name
        </div>
        <div className="col-span-3 xl:col-span-2 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Photo
        </div>
        <div className="col-span-3 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork
        </div>
        <div className="col-span-3 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork
        </div>
        <div className="col-span-4 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Artwork
        </div>
        <div className="col-span-6 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center">
          Contact
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
