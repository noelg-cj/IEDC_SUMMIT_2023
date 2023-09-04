const IedcSubCircle = ({ datas }) => {
  return (
    <div>
      <div className="font-dm-sans bg-gradient-to-br from-[#0597F2] to-[#0597F2] p-1 rounded-full w-[72px] sm:w-32 lg:w-44">
        <div className="w-full bg-white rounded-full aspect-square flex flex-col justify-center items-center">
          <div className="text-xl sm:text-4xl lg:text-7xl font-bold text-[#3866F2]">
            {datas.value}
          </div>
          <div className="text-[9px] sm:text-lg lg:text-xl font-semibold uppercase text-[#605D5D]">
            {datas.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IedcSubCircle;
