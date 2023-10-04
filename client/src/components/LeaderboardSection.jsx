import LeaderboardCard from "./LeaderboardCard";
import { leaderboard } from "../leaderBoardData";
import bg from "../assets/img/leaderboard.png";

function LBmodal() {
  return (
      <div className=" relative w-full flex justify-center bg-gradient-to-br from-[#0597F2] to-[#6F04D9] p-1 ">
        <a className="absolute top-2 md:top-5 left-2 md:left-5 p-2 bg-transparent text-white border-[#FFF8] rounded-[10px] border-2 z-20" href="/">Go To Home</a>
        <img src={bg} className="invisible lg:visible fixed top-12" />
        <div className="mx-4 my-4 w-5/6 sm:w-9/12 z-10">
          <div className="flex justify-end pt-8 pb-12 w-full">
            <div className="w-full text-center self-center flex flex-col bg-transparent ">
              <div className="absolute overflow-hidden -z-10 top-[-10px] left-0 w-full text-center">
                <h1 className="invisible lg:visible  text-[100px] whitespace-nowrap font-bold bg-gradient-to-tr from-[#4243E4] to-[#0597F2] bg-clip-text text-transparent">
                  Campus Ambassador
                </h1>
              </div>
              <h1 className="inline pt-2 sm:pt-0 font-[700] text-5xl text-white z-[100]">
                LeaderBoard
              </h1>
            </div>
          </div>
          <div className="bg-transparent flex flex-col gap-6 min-h-screen">
            {leaderboard.map((lb, index) => (
              <LeaderboardCard data={lb} position={index+1} key={index + lb.name} />
            ))}
          </div>
        </div>
      </div>
  );
}
export default LBmodal;