import React from "react";

const MainChildren = ({ children, title }) => {
  return (
    <div className="bg-indigo-300 w-full  flex flex-col py-2 justify-center items-center">
      <h1 className="text-red-500">{title}</h1>
      {children}
    </div>
  );
};

export default MainChildren;
