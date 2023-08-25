import ScheduleTile from "../components/ScheduleTile";

const Schedule = () => {
  return (
    <div className="px-24 py-20 font-darker-grotesque">
      <h1 className=" text-6xl text-start font-semibold">SCHEDULE</h1>

      <div className="flex py-16 justify-around text-3xl font-semibold">
        <div></div>
        <div>Dhwani Stage</div>
        <div>DJ Hall</div>
        <div>CETAA Hall</div>
      </div>

      <div className="flex text-2xl font-medium">
        <div className="flex-1">
          <ScheduleTile />
          <ScheduleTile />
        </div>
        <div className="w-3/12 pt-10 pl-10">
          Filter By:
          <div className="leading-6">
            <div className>
              <input type="radio" className="align-middle" name="filter-by" />{" "}
              Venue
            </div>
            <div>
              <input type="radio" className="align-middle" name="filter-by" />{" "}
              Type
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
