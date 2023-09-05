import React, { useState } from "react";

function callCard(props) {
  const numberOfSquares = 14;
  const squares = [];
  const { buttonTitle, eventName, eventImg, eventDescription, eventLink } =
    props;

  return (
    <div className=" mb-6  overflow-hidden relative flex flex-col h-[632px] bg-black  border-[2px] border-[#3866F266] shadow-md hover:shadow-xl w-[365.82px] rounded-[30px] ">
      <img src={eventImg} className="h-1/2 bg-orange-300  self-center w-full" />
      <div className="font-dm-sans">
        <div className="text-white w-10/12 h-fit mt-4 items-center  mx-auto">
          <h1 className="font-[900] text-3xl leading-tight">{eventName}</h1>
          <p className=" font-[300] text-[18px]">{eventDescription}</p>
        </div>
        <div className="justify-center flex bg-black">
          <a
            href={eventLink}
            target="_blank"
            className="text-center absolute border-[1px] border-black bottom-7 right-11 text-xl font-medium w-[151px] h-[32px] rounded-xl flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] hover:text-white hover:border-0"
          >
            {buttonTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default callCard;
