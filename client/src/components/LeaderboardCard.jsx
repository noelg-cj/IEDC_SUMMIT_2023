const LeaderboardCard = ({ data,position }) => {
  const uppercaseName = data.name.toUpperCase();
  return (
    <div className="font-dm-sans flex flex-row gap-3 justify-between items-center py-5 px-8 bg-[#FFF6] text-white border-[#FFF8] rounded-[10px] border-2">
      <div className="text-sm sm:text-xl font-medium">{position}.</div>
      <div className="text-sm sm:text-xl font-medium">{uppercaseName}</div>
      <div className="text-sm sm:text-xl font-medium">{data.refCode}</div>
    </div>
  );
};

export default LeaderboardCard;
