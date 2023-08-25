import { speakers } from "../data";

const ScheduleTile = () => {
  return (
    <div className="flex items-center py-5 gap-12">
      <div className="w-2/12  font-darker-grotesque text-lg font-semibold">
        9:30AM - 12:30PM
      </div>
      <div className="w-1">1</div>
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
