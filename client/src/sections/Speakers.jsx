import React, { useState } from "react";
import Speaker from "../components/Speaker";
import WaveLine from "../components/WaveLine";
import { speakers } from "../data";
import "./revolve.css";

function Speakers() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-100vw flex-shrink-0 bg-gradient-to-b from-[#097ED8] to-[#001E35]  px-7 py-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WaveLine
        position="top-8 -right-48"
        animation={isHovered ? "animate-right" : "animate-right-return"}
        direction={true}
      />
      <WaveLine
        position="top-12 -right-48"
        animation={isHovered ? "animate-right" : "animate-right-return"}
        direction={true}
      />
      <WaveLine
        position="top-16 -right-48"
        animation={isHovered ? "animate-right" : "animate-right-return"}
        direction={true}
      />
      <WaveLine
        position="top-20 -right-48"
        animation={isHovered ? "animate-right" : "animate-right-return"}
        direction={true}
      />
      <WaveLine
        position="top-24 -right-48"
        animation={isHovered ? "animate-right" : "animate-right-return"}
        direction={true}
      />
      <div
        className={`flex justify-center items-center font-darker-grotesque text-center font-medium whitespace-nowrap ${
          isHovered ? "animate-move" : "animate-move-return"
        }`}
      >
        <h1>THE SPEAKERS</h1>
      </div>
      <div
        className={`mx-20 mb-40 mt-10 grid grid-cols-4 grid-rows-2 justify-evenly gap-20 items-center ${
          isHovered
            ? " animate-speakers-move"
            : "animate-speakers-move-return hidden"
        }`}
      >
        {speakers.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.name} />
        ))}
      </div>
      <div className="mt-20">
        <WaveLine
          position="bottom-8 -left-48"
          animation={isHovered ? "animate-left" : "animate-left-return"}
          direction={false}
        />
        <WaveLine
          position="bottom-12 -left-48"
          animation={isHovered ? "animate-left" : "animate-left-return"}
          direction={false}
        />
        <WaveLine
          position="bottom-16 -left-48"
          animation={isHovered ? "animate-left" : "animate-left-return"}
          direction={false}
        />
        <WaveLine
          position="bottom-20 -left-48"
          animation={isHovered ? "animate-left" : "animate-left-return"}
          direction={false}
        />
        <WaveLine
          position="bottom-24 -left-48"
          animation={isHovered ? "animate-left" : "animate-left-return"}
          direction={false}
        />
      </div>
    </div>
  );
}

export default Speakers;
