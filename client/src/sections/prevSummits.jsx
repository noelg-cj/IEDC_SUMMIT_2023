import React from "react";
import PreSumCard from "../components/prevSumCard";
import VideoCard from "../components/videoCard";
import { prevSummits } from "../data";
function prevSummut() {
  return (
    <div className=" font-darker-grotesque w-10/12 xs:w-11/12 py-10 space-y-10 min-h-[80vh]  flex flex-col ">
      <h1 className="font-[500] text-[60px]">Explore Our Previous Summits</h1>

      <div className="lg:w-3/5  space-y-5 w-full">
        {prevSummits.map((summit, index) => (
          <PreSumCard summit={summit} key={index} />
        ))}
      </div>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center gap-3 sm:justify-items-center">
        <VideoCard number={1} />
        <VideoCard number={2} />
        <VideoCard number={3} />
        <VideoCard number={4} />
        <VideoCard number={5} />
        <VideoCard number={6} />
      </div>
    </div>
  );
}
export default prevSummut;
<svg
  width="35"
  height="35"
  viewBox="0 0 35 35"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="19.5" cy="16.5" r="0.5" fill="black" fill-opacity="0.28" />
  <path
    d="M11 5L23 17L11 29"
    stroke="#09189C"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
