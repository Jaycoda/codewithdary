"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import MainChildren from "./components/MainChildren";

export default function Home() {
  const [open, setOpen] = useState(false);

  const changeShape = useRef();

  const [loading, setLoading] = useState(true);

  const getChangeShape = () => {
    changeShape.current.className =
      " flex justify-center items-center w-48 h-48 bg-red-400 rounded-full";
  };

  function loadingTimer() {
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return "loading...";
    } else {
      return "loaded now...";
    }
  }

  // const buttonHandler = () => {
  //   // setOpen(!open);
  //   setOpen((prev) => !prev);
  // };

  return (
    <div className="h-screen flex justify-center">
      <div className=" h-full bg-gray-100 flex flex-col gap-6 items-center rounded-lg p-2 w-5/6 my-10">
        <div className="flex w-full">
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

        <div className="flex bg-cyan-200 w-full justify-center items-center h-20">
          <h1 className="text-red-400">{loadingTimer()}</h1>
        </div>
        <MainChildren title="This is a prop title">
          <h1>This is a children prop within a component</h1>
        </MainChildren>

        <div
          ref={changeShape}
          className=" flex justify-center items-center w-48 h-48 bg-red-400"
        >
          hello
        </div>
        <button
          className="bg-indigo-500 p-2 rounded-lg text-white"
          onClick={() => getChangeShape()}
        >
          {" "}
          Change Shape{" "}
        </button>
      </div>
    </div>
  );
}
