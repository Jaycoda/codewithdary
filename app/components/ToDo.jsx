"use client";
import React, { useState } from "react";

const ToDo = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function addItem(e) {
    setItems((prev) => {
      return [...prev, inputText];
    });

    e.preventDefault();
    setInputText("");
  }

  return (
    <div className=" bg-blue-100 min-h-96 m-5 p-10 rounded-lg shadow-xl text-center">
      <div className="mb-4 bg-green-200 flex justify-center">
        <h1 className="bg-yellow-300 rotate-2  w-3/4 rounded-md text-lg">
          ToDo List
        </h1>
      </div>
      <div>
        <input
          className="p-1 rounded-md"
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Write your list..."
        />
        <button
          className="bg-gray-600 py-2 px-3 ml-2 rounded-lg text-sm text-white"
          onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-gray-600 py-2 px-3 ml-2 rounded-lg text-sm text-white mt-4"
        onClick={() => setItems([])}
      >
        reset all
      </button>
    </div>
  );
};

export default ToDo;
