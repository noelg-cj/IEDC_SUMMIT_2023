import React, { useState } from "react";

function Speaker({ speaker }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-48 h-48 flex flex-col items-center mb-4">
      <div
        className="group relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src={speaker.img}
          alt="Speaker"
        />
        <div
          className={`${
            isHovered ? "animate-grow-circle opacity-100" : "opacity-0"
          } absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-full overflow-hidden`}
        >
          <p className="text-white text-center font-dm-sans text-base font-medium leading-[1.05]">
            {speaker.title1}
          </p>
          <p className="text-white text-center font-dm-sans text-base font-medium leading-[1.05]">
            {speaker.title2}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-6 w-5/6 px-4 py-2 bg-white text-center rounded-3xl flex flex-col items-center justify-center">
        <p className="text-black font-dm-sans text-base font-medium leading-[1.05]">
          {speaker.name}
        </p>
      </div>
    </div>
  );
}

export default Speaker;
