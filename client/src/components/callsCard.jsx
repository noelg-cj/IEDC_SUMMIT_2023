import React, { useState } from "react";

function callCard(props) {
  
  const { eventName, eventImg, eventDescription, eventLink, buttonTitle } =
    props;

  return (
    <div className=" mb-6  overflow-hidden relative flex lg:flex-col h-[150px] lg:h-[632px] bg-[#2c2c2c]  border-[2px] border-[#3866F266] shadow-md hover:shadow-xl w-[365.82px] rounded-lg lg:rounded-2xl ">
      <img src={eventImg} className="h-full flex-1 lg:h-1/2 bg-orange-300  self-center w-full object-cover" />
      <div className="font-dm-sans flex-[2] flex items-center flex-col w-full">
        <div className="text-white w-10/12 h-fit mt-4 items-center  mx-auto">
          <h1 className="font-[900] text-center lg:text-left text-xl lg:text-3xl leading-tight">{eventName}</h1>
          <p className=" font-[300] hidden lg:block lg:text-lg">{eventDescription}</p>
        </div>
        <div className="justify-center flex h-full relative w-full">
          <a
            href={eventLink}
            target="_blank"
            className="text-center absolute border-[1px] border-black bottom-3 lg:bottom-7 right-4 lg:right-11 text-xl font-medium w-10/12 lg:w-[151px] h-10 rounded-md flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] hover:text-white hover:border-0"
          >
            {buttonTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default callCard;
