/* eslint-disable react/prop-types */

import LeaderboardCard from "./LeaderboardCard";
import { leaderboard } from "../leaderBoardData";
import bg from "../assets/img/leaderboard.png";

export default function LBmodal(props) {
  return (
    <div className="static ">
      <div className="fixed top-[5%] bottom-[5%] lg:right-[15%] lg:left-[15%] right-[6%] left-[6%] z-[100] flex justify-center bg-gradient-to-br from-[#0597F2] to-[#6F04D9] p-1 rounded-[20px]">
        <img src={bg} className="invisible lg:visible absolute z-10 top-12" />

        <div className="mx-4 my-4 w-9/12 z-[100]">
          <div className="flex justify-end pt-8 pb-12 w-full">
            <div className="w-full text-center self-center flex flex-col bg-transparent ">
              <div className="absolute overflow-hidden -z-10 top-[-10px] left-0 w-full text-center">
                <h1 className="invisible lg:visible  text-[100px] whitespace-nowrap font-bold bg-gradient-to-tr from-[#4243E4] to-[#0597F2] bg-clip-text text-transparent">
                  Campus Ambassador
                </h1>
              </div>
              <h1 className="inline font-[700] text-4xl text-white z-[100]">
                LeaderBoard
              </h1>
            </div>
            <button
              onClick={() => props.toggler()}
              className="text-white text-xl px-2 m-2 self-end absolute top-4 right-4"
            >
              {"\u274C"}
            </button>
          </div>
          <div className="bg-transparent flex flex-col gap-6 h-[70vh] sm:h-[55vh] overflow-auto">
            {leaderboard.map((lb, index) => (
              <LeaderboardCard data={lb} position={index+1} key={index + lb.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
