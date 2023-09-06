import React from "react";
import { TeamMembers } from "../data";
import TeamCard from "../components/TeamCard";

function Team() {
  console.log("hello");
  return (
    <div
      
      className="relative space-y-10 font-dm-sans  w-11/12 flex flex-col mb-20"
    >
      <div className="absolute overflow-hidden -z-10 opacity-5 text-[#0597F2] xl:top-[-120px] lg:top-[-80px] md:top-[-20px] top-0 w-full space-y-6 text-center self-center">
        <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
           Team
        </h1>
      </div>
      <div className="w-11/12 space-y-6 text-center self-center">
        <button className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
        Meet the Team
        </button>
        
      </div>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col gap-10">
        {TeamMembers.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Modal(props) {
  return (
    <div className="static">
      <div className="fixed top-20 right-0 left-0 z-20 flex justify-center">
          <div className="mx-4 my-4 bg-white">
              <div className="flex justify-end">
                  <button onClick={() => props.toggler()} className="border-2 text-red-900 px-2 m-2">
                    X
                  </button>
              </div>
              <div className=" bg-white">
                  <Team />
              </div>
          </div>
      </div>
    </div>
  );
}