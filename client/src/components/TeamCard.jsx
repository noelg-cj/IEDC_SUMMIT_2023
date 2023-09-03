import React from "react";

function TeamCard({ member }) {
  return (
    <div className="bg-gradient-to-br from-[#0597F2] to-[#6F04D9] p-1 rounded-[70px]">
      <div className="w-full bg-white rounded-[70px] flex gap-4">
        <div className="w-1/3 flex-none p-2">
          <img src={member.image} alt={member.name} className="rounded-full" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold">
            {member.name}
          </p>
          <p className="text-2xl lg:text-xl xl:text-2xl font-medium">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
