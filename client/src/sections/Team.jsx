import React from "react";
import { TeamMembers } from "../data";
import TeamCard from "../components/TeamCard";

function Team() {
  console.log("hello");
  return (
    <div className="flex flex-col gap-12 items-center w-11/12 text-center font-darker-grotesque mb-20">
      <h1 className=" text-7xl font-bold leading-normal bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
        Meet The Team
      </h1>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col gap-10">
        {TeamMembers.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;
