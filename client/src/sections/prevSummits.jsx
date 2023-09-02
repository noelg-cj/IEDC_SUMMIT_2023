import React from "react";
import PreSumCard from "../components/prevSumCard";
import VideoCard from "../components/videoCard";
import { prevSummits } from "../data";

function prevSummut() {
  return (
    <div className="relative font-darker-grotesque w-10/12 xs:w-11/12 py-10 space-y-10 min-h-[80vh]  flex flex-col ">
      <h1 className="font-bold md:font-[500] text-5xl text-[#0597F2] text-center md:text-[60px]">
        Explore Our Previous Summits
      </h1>
      <div className="lg:w-full flex flex-col lg:flex-row items-center w-full border-t-4 border-b-4 border-[#4656E1]">
        {prevSummits.map((summit, index) => (
          <PreSumCard summit={summit} key={index} />
        ))}
      </div>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center gap-3 sm:justify-items-center">
        <VideoCard videoID={"fPmUPSigxrg"} />
        {/* <VideoCard number={2} />
        <VideoCard number={3} />
        <VideoCard number={4} />
        <VideoCard number={5} />
        <VideoCard number={6} /> */}
      </div>
    </div>
  );
}
export default prevSummut;
