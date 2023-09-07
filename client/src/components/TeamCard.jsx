import React from "react";

function TeamCard({ member }) {
  return (
    <div className="bg-gradient-to-br from-[#0597F2] to-[#6F04D9] p-1 rounded-[70px] padding-[10px]">
      <div className="w-full bg-white rounded-[70px] flex gap-4">
        <div className="w-[130px] h-[130px] rounded-full flex-none p-2">
          <img src={member.image} alt={member.name} className="w-full h-full rounded-full" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <p className="text-xl lg:text-xl xl:text-2xl  font-semibold">
            {member.name}
          </p>
          <p className="text-l lg:text-l xl:text-xl font-[300]">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
