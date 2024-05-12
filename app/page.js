"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  // const buttonHandler = () => {
  //   // setOpen(!open);
  //   setOpen((prev) => !prev);
  // };

  return (
    <div className="h-screen flex justify-center">
      <div className=" h-60 bg-gray-100 flex justify-evenly items-center rounded-lg p-2 w-5/6 mt-10">
        <div className="bg-red-500 text-white p-2 h26 flex-auto">
          <p>Flex item 1</p>
        </div>
        <div className="bg-blue-500 text-white p-2 h-26 flex-auto">
          <p>Flex item 2</p>
        </div>
        <div
          className={`bg-yellow-500 text-white p-2 h-26  ${
            open ? "w-44 " : "flex-auto"
          }`}
          onClick={() => setOpen(!open)}
        >
          <p>Flex item 3</p>
          <p>{`I say...  ${open ? "Bye" : "Hello"}`}</p>
        </div>
      </div>
    </div>
  );
}
