import React from "react";
import { useInView } from "react-intersection-observer";
import Speaker from "../components/SpeakerCard";
import WaveLine from "../components/WaveLine";
import { speakers } from "../data";
import "./animations.css";

function Speakers() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="relative h-screen w-100vw flex-shrink-0 bg-gradient-to-b from-[#097ED8] to-[#001E35]  px-7 py-12 overflow-hidden"
    >
      <div className={`${inView ? "animate-right" : "animate-right-return"}`}>
        <WaveLine position="top-8 -right-48" direction={true} />
        <WaveLine position="top-12 -right-48" direction={true} />
        <WaveLine position="top-16 -right-48" direction={true} />
        <WaveLine position="top-20 -right-48" direction={true} />
        <WaveLine position="top-24 -right-48" direction={true} />
      </div>
      <div
        className={`flex justify-center items-center font-darker-grotesque text-center font-medium whitespace-nowrap ${
          inView ? "animate-move" : "animate-move-return"
        }`}
      >
        <h1>THE SPEAKERS</h1>
      </div>
      <div
        className={`${
          inView
            ? "animate-speakers-move"
            : "animate-speakers-move-return hidden"
        }`}
      >
        <div
          className={`mx-20 mb-40 mt-10 grid grid-cols-4 grid-rows-2 justify-evenly gap-20 items-center `}
        >
          {speakers.map((speaker) => (
            <Speaker speaker={speaker} key={speaker.name} />
          ))}
        </div>
      </div>

      <div
        className={`mt-20 ${inView ? "animate-left" : "animate-left-return"}`}
      >
        <WaveLine position="bottom-8 -left-48" direction={false} />
        <WaveLine position="bottom-12 -left-48" direction={false} />
        <WaveLine position="bottom-16 -left-48" direction={false} />
        <WaveLine position="bottom-20 -left-48" direction={false} />
        <WaveLine position="bottom-24 -left-48" direction={false} />
      </div>
    </div>
  );
}

export default Speakers;
