import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Card title={"Custom Button"} />
      <Card />
    </div>
  );
};

export default page;
