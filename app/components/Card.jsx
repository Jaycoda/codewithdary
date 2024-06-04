"use client";
import React, { useState } from "react";

const Card = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col h-40 w-72 bg-white rounded-2xl border-2 border-slate-300 shadow-lg m-4">
        <h1 className="font-bold text-slate-600">Press The Button</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="group m-3 flex justify-center items-center h-10 px-4 bg-blue-500 rounded-lg relative hover:bg-blue-400 "
        >
          <span className="text-white">{props.title}</span>
          <span className="absolute -right-2 -top-2 rounded-full w-6 h-6 bg-red-500 flex justify-center items-center text-sm text-white group-hover:bg-red-400">
            {count}
          </span>
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Default Button Title",
};

export default Card;
