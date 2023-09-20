/* eslint-disable react/prop-types */

const LeaderboardCard = ({ data,position }) => {
  return (
    <div className="font-dm-sans flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center py-5 px-8 bg-[#FFF6] text-white border-[#FFF8] rounded-[10px] border-2">
      <div className="text-xl font-medium">{position}.</div>
      <div className="text-xl font-medium">{data.name}</div>
      <div className="text-xl font-medium">{data.refCode}</div>
      {/* <div className="text-md">{data.college}</div> */}
    </div>
  );
};

export default LeaderboardCard;
