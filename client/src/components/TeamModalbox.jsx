import React from "react";
import { TeamMembers } from "../data";
import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <div
      className="relative font-dm-sans  flex flex-col overflow-auto  p-5"
      style={{ height: "75vh" }}
    >
      <div className="w-11/12 space-y-6 text-center self-center flex flex-col  bg-[#C9D9E8]">
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          Team
        </h1>
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
    <div className="static ">
      <div className="fixed top-20 right-20 left-20 z-20  flex justify-center ">
        <div className="mx-4 my-4 bg-[#C9D9E8]">
          <div className="flex justify-end bg-[#C9D9E8]">
            <button
              onClick={() => props.toggler()}
              className="border-2 text-red-900 px-2 m-2"
            >
              X
            </button>
          </div>
          <div className=" m bg-[#C9D9E8] ">
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
}
