import React from "react";
import { TeamMembers } from "../data";
import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <div className="w-full relative font-dm-sans flex flex-col items-center overflow-auto  p-5 h-[85vh]">
      <div className="w-11/12 space-y-6 text-center self-center flex flex-col" >
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          Team
        </h1>
      </div>
      <div className="min-[970px]:grid min-[1350px]:grid-cols-3 min-[970px]:grid-cols-2 flex flex-col gap-10" >
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
      <div className="m-4 shadow-lg fixed top-20 right-0 left-0 md:left-5 md:rigt-5 z-20">
          <div className="bg-white">
              <div className="flex relative bg-white">
                  <button onClick={() => props.toggler()} className="absolute z-40 right-5 font-extrabold text-xl opacity-50 hover:opacity-100 px-2 m-2">
                    X
                  </button>
                  <Team />
              </div>
          </div>
      </div>
    </div>
  );
}