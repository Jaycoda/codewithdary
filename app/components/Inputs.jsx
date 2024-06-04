"use client";
import React, { useState } from "react";

const Inputs = () => {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
    setName("");
  }

  return (
    <div className=" bg-red-100 m-5 p-10 text-center">
      <h1 className="text-2xl font-bold">Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          className="block my-4 border-2 border-green-400 w-56  rounded-lg py-2 px-2 bg-gray-300/50 text-center text-gray-700 focus:outline-none focus:border-green-600"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
        <button className=" bg-white rounded-lg text-green-400 w-56 py-2 px-2 hover:text-white hover:bg-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inputs;
