import React from "react";
import { TeamMembers } from "../data";
import TeamCard from "../components/TeamCard";

function Team() {
  console.log("hello");
  return (
    <div className="relative font-dm-sans  flex flex-col overflow-auto  " style={{height: '60vh'}}>
      <div className="sm:grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 flex flex-col gap-8" >
        {TeamMembers.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Modal(props) {
  return (
    <div className="static ">
      <div className="fixed top-28 right-36 left-36 z-20 flex justify-center bg-[#C9D9E8] p-1 rounded-[65px]">
          <div className="mx-4 my-4 bg-[#C9D9E8]">
              <div className="flex justify-end bg-[#C9D9E8]">
                <div className="w-11/12 space-y-6 text-center self-center flex flex-col bg-[#C9D9E8] " >
                  <h1 className="inline font-[700] text-[65px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
                  Team
                  </h1>
                </div>
                  <button onClick={() => props.toggler()} className="text-red-900 px-2 m-2 ">
                    X
                  </button>
              </div>
              <div className=" bg-[#C9D9E8] ">
                  <Team />
              </div>
          </div>
      </div>
    </div>
  );
}