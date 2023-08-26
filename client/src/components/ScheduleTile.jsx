import { speakers } from "../data";

const ScheduleTile = () => {
  return (
    <div className="flex items-center py-5 gap-12">
      <div className="w-2/12 font-darker-grotesque text-lg font-semibold">
        9:30AM - 12:30PM
      </div>
      <div className="w-2 relative self-stretch my-[-20px] flex flex-col justify-center">
        <div className="text-2xl font-semibold text-white bg-theme-blue w-8 h-8 text-center rounded-full z-10">
          13
        </div>
        <div className="absolute bg-theme-blue w-1 h-4/6 left-3.5 top-0"></div>
        <div className="absolute bg-theme-blue w-1 h-4/6 left-3.5 bottom-[-10%]"></div>
      </div>
      <div className="w-28">
        <img
          src={speakers[0].img}
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div className="w-6/12">
        <div className="font-darker-grotesque text-4xl font-semibold text-theme-blue">
          Welcome Speech
        </div>
        <div className="font-darker-grotesque text-xl font-semibold">
          Dr. Shashi Tharoor
        </div>
        <div className="font-darker-grotesque text-xl font-semibold">
          Member of Parliament
        </div>
      </div>
    </div>
  );
};

export default ScheduleTile;

//border-2 border-red-700
