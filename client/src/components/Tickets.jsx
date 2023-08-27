import React, { useState } from "react";

function Ticket() {
  const numberOfSquares = 14;
  const squares = [];

  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(
      <div
        key={i}
        className="bg-white w-[15px] h-[15px] rounded-[15px] mr-2"
      ></div>
    );
  }

  return (
    <div className=" mb-6  overflow-hidden relative flex flex-col h-[622px] bg-gradient-to-b from-[#17C4E8] to-[#0E79BE] w-[365.82px] rounded-[30px] ">
      <div className="h-[234px] bg-white  self-center m-[19px]  w-11/12 rounded-[30px]"></div>
      <div className="self-center flex flex-row bg-lime- ">
        <div className="w-[38px] rotate-180  overflow-hidden">
          <div className="w-[75px] h-[75px] bg-white rounded-[75px]"></div>
        </div>
        <div className="ml-2 my-auto mx-auto flex">{squares}</div>
        <div className="w-[38px]   overflow-hidden">
          <div className="w-[75px] h-[75px] bg-white rounded-[75px]"></div>
        </div>
      </div>
      <div className="font-dm-sans">
        <div className="w-11/12 mx-auto  h-fit items-center  mx-auto">
          <h1 className=" font-[700] text-[38px]">
            Everyting is Entrepreneaurship
          </h1>
          <p className=" font-[500] text-[20px]">
            A series of talks by well-known Women Entrepreneurs.
          </p>
        </div>
        <div className="justify-center flex">
          <button className=" font-[700] absolute bottom-5 text-xl font-extrabold w-[151px] h-[60px] bg-[#FFFFFF] shadow-md rounded-[30px]">
            See All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
