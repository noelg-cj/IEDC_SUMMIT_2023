import React from "react";
import Circle from "../components/Circle";
import "./revolve.css";

function COI() {
  return (
    <div className="flex relative justify-center items-center h-screen">
      <div className="absolute left-[27%] bottom-[25%] ">
        <Circle />
      </div>
      <div className="absolute left-[27%] top-[25%] ">
        <Circle />
      </div>
      <div className="absolute right-[27%] bottom-[25%] ">
        <Circle />
      </div>
      <div className="absolute right-[27%] top-[25%] ">
        <Circle />
      </div>
      <div className="absolute left-auto top-[10%] ">
        <Circle />
      </div>
      <div className="absolute left-auto bottom-[10%] ">
        <Circle />
      </div>
      <div className="text-center font-dm-sans font-bold">
        <p className="text-4xl text-[#605D5D]">IEDC</p>
        <p className="text-3xl text-[#2880B9]">SUMMIT</p>
      </div>
    </div>
  );
}

export default COI;
