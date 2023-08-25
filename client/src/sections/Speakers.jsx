import React from "react";
import Speaker from "../components/SpeakerCard";
import WaveLine from "../components/WaveLine";
import { speakers } from "../data";

function Speakers() {
  return (
    <div className="relative w-full space-y-6 flex flex-col items-center bg-gradient-to-b from-[#17C4E8] to-[#0E79BE]  ">
      <div className="hidden lg:block">
      <WaveLine position="top-8 -right-0" direction={true} />
      <WaveLine position="top-12 -right-0" direction={true} />
      <WaveLine position="top-16 -right-0" direction={true} />
      <WaveLine position="top-20 -right-0" direction={true} />
      <WaveLine position="top-24 -right-0" direction={true} />
      </div>
      
      <h1 className="font-darker-grotesque text-6xl text-white text-center font-medium">
        THE SPEAKERS
      </h1>
      <div className=" w-11/12  flex flex-wrap justify-evenly gap-20 items-center">
        {speakers.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.name} />
        ))}
      </div>
      <div className="hidden lg:block">
      <WaveLine position="bottom-8 left-0" direction={false} />
      <WaveLine position="bottom-12 left-0" direction={false} />
      <WaveLine position="bottom-16 left-0" direction={false} />
      <WaveLine position="bottom-20 left-0" direction={false} />
      <WaveLine position="bottom-24 left-0" direction={false} />
      </div>
      
    </div>
  );
}

export default Speakers;
