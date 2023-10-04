import React, { useState } from "react";

function Speaker({ speaker }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative justify-center lg:w-64 lg:h-64 md:w-40 md:h-40 sm:w-32 sm:h-32 w-60 h-60 flex flex-col items-center">
      <div
        className="group hover:animate-shrink-circle relative w-full h-full"
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
          } absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-85 flex flex-col items-center justify-center rounded-full overflow-hidden`}
        >
          <p className="text-white text-center font-dm-sans text-lg font-medium leading-[1.05]">
            {speaker.title1}
          </p>
          <p className="text-white text-center font-dm-sans text-lg font-medium leading-[1.05]">
            {speaker.title2}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-6 w-5/6 px-4 py-0 bg-white text-center rounded-xl flex flex-col items-center justify-center">
        <p className="text-black font-dm-sans text-xl md:text-xl font-medium leading-[1.05]">
          {speaker.name}
        </p>
      </div>
    </div>
  );
}

export default Speaker;
