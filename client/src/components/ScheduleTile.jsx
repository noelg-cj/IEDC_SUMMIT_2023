import { speakers } from "../data";

const ScheduleTile = ({ datas, num, top, bottom }) => {
  return (
    <div className="flex items-center py-8 gap-8 lg:gap-12">
      <div className="hidden lg:block w-2/12 font-darker-grotesque text-lg font-semibold">
        {datas.time}
      </div>
      <div className="w-2 relative self-stretch my-[-20px] flex flex-col justify-center mr-4">
        <div className="text-2xl font-semibold text-white bg-theme-blue3 w-8 h-8 text-center rounded-full z-10">
          {num}
        </div>
        <div
          className={
            top
              ? "absolute opacity-0"
              : "absolute bg-theme-blue3 w-1 h-4/6 left-3.5 top-[-10%]"
          }
        ></div>
        <div
          className={
            bottom
              ? "absolute opacity-0"
              : "absolute bg-theme-blue3 w-1 h-4/6 left-3.5 bottom-[-10%]"
          }
        ></div>
      </div>
      <div className="w-15 sm:w-17 md:w-28">
        <img
          src={datas.img}
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div className="w-8/12 lg:w-6/12">
        <div className="lg:hidden font-darker-grotesque text-sm sm:text-md font-semibold">
          {datas.time}
        </div>
        <div className="font-darker-grotesque text-xl sm:text-4xl font-semibold text-theme-blue">
          {datas.title}
        </div>
        <div className="font-darker-grotesque text-md sm:text-xl font-semibold">
          {datas.name}
        </div>
        <div className="font-darker-grotesque text-md sm:text-xl font-semibold">
          {datas.position}
        </div>
      </div>
    </div>
  );
};

export default ScheduleTile;

//border-2 border-red-700
