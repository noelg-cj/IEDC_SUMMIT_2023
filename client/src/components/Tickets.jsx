import React, { useState } from "react";
import {urlFor} from "../../sanityConfig.js"

function Ticket(props) {
  const numberOfSquares = 14;
  const buttonTitleArray = [
    "Register Now",
    "Event Completed",
    "Registrations Closed",
    "Forthcoming Results",
  ];
  const squares = [];
  const { eventName, eventImg, eventDescription, eventLink, eventButton } =
    props;
  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(
      <div
        key={i}
        className="shadow-inner  border-2 bg-zinc-50 w-[15px] h-[15px] rounded-[15px] mr-2"
      ></div>
    );
  }

  return (
    <div
    className="flex-none overflow-hidden relative flex flex-col h-[622px] border-b-2 border-r- border-gray-300
    bg-white
    w-[350px] rounded-[30px] mb-12 "
    >
      <div className="h-[50%] shadow-2xl shadow-blue-100 border-2 rounded-[20px]  w-full self-center     rounded-t-[30px]">
        <img
          src={urlFor(eventImg).url()}
          alt="Event Image"
          className=" rounded-[20px] w-full h-full  "
        />
      </div>

      <div className="h-[50%] ">
        <div className=" flex flex-row h-[25%] items-center  mx-auto">
          <div className="w-[38px]  rotate-180  overflow-hidden">
            <div className="shadow-inner  w-[75px] bg-zinc-50 h-[75px]  rounded-[75px]"></div>
          </div>
          <div className="ml-2 my-auto mx-auto flex">{squares}</div>
          <div className="w-[38px]   overflow-hidden">
            <div className="shadow-inner w-[75px] bg-zinc-50 h-[75px] rounded-[75px]"></div>
          </div>
        </div>
        <div className="h-[75%] border-2 border-t-0  ">
          <div className="  h-3/4 p-2 w-full  items-center  mx-auto">
            <h1 className="font-[900] text-left text-2xl  leading-tight">
              {eventName}
            </h1>
            <p className=" font-[300] block text-md ">{eventDescription}</p>
          </div>
          <div className="h-1/4  items-center  mx-auto">
            <div className="justify-center flex">
              {eventButton == 0 ? (
                <a
                  href={eventLink}
                  target="_blank"
                  className="text-center bg-[#32d9ff] absolute bottom-5 text-md font-extrabold w-[151px] p-3 shadow-md rounded-[30px] flex items-center justify-center hover:bg-gradient-to-tr from-[#0597F2] to-[#4656E1] hover:text-white"
                  rel="noreferrer"
                >
                  {buttonTitleArray[0]}
                </a>
              ) : (
                <a
                  className="text-center absolute bottom-5 text-md font-extrabold w-[151px] h-[60px]  shadow-md rounded-[30px] flex items-center justify-center"
                  rel="noreferrer"
                >
                  {buttonTitleArray[eventButton]}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
