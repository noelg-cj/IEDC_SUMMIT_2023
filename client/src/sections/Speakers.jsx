import React from "react";
import Speaker from "../components/Speaker";
import WaveLine from "../components/WaveLine";
import { speakers } from "../data";

function Speakers() {
  return (
    <div className="w-full flex-shrink-0 bg-gradient-to-b from-[#17C4E8] to-[#0E79BE] px-7 py-12 overflow-hidden">
      <WaveLine position="top-8 -right-20" direction={true} />
      <WaveLine position="top-12 -right-20" direction={true} />
      <WaveLine position="top-16 -right-20" direction={true} />
      <WaveLine position="top-20 -right-20" direction={true} />
      <WaveLine position="top-24 -right-20" direction={true} />
      <h1 className="font-darker-grotesque text-6xl text-white text-center font-medium">
        THE SPEAKERS
      </h1>
      <div className="m-20 flex flex-wrap justify-evenly gap-20 items-center">
        {speakers.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.name} />
        ))}
      </div>
      <WaveLine position="bottom-8 -left-20" direction={false} />
      <WaveLine position="bottom-12 -left-20" direction={false} />
      <WaveLine position="bottom-16 -left-20" direction={false} />
      <WaveLine position="bottom-20 -left-20" direction={false} />
      <WaveLine position="bottom-24 -left-20" direction={false} />
    </div>
  );
}

export default Speakers;
