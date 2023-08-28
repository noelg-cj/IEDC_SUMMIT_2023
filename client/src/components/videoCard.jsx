import React from "react";
function videoCard({ number }) {
  return (
    <div className="w-full sm:[w-250px] xl:w-[350px] h-[250px] bg-gray-300 rounded-[20px] flex flex-col justify-center items-center">
      <h1 className="font-darker-grotesque font-semibold text-4xl text-black">
        Video {number}
      </h1>
    </div>
  );
}
export default videoCard;
