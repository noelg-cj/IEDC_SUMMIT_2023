import { useState } from "react";
import ScheduleTile from "../components/ScheduleTile";
import { schedules } from "../data";

const Schedule = () => {
  const [location, setLocation] = useState("0");
  console.log(location);
  const selectLocation = (e) => {
    setLocation(e.target.getAttribute("data-loc-id"), () =>
      console.log(location)
    );
  };

  return (
    <div className="px-24 py-20 font-darker-grotesque">
      <h1 className=" text-6xl text-start font-semibold">THE SCHEDULE</h1>

      <div className="flex py-16 justify-around text-3xl font-semibold">
        <div></div>
        <div
          className={`transition-colors	cursor-pointer	duration-300 ${
            location === "0" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={0}
        >
          Dhwani Stage
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-300 ${
            location === "1" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={1}
        >
          DJ Hall
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-300 ${
            location === "2" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={2}
        >
          CETAA Hall
        </div>
      </div>

      <div className="flex text-2xl font-medium">
        <div className="flex-1">
          {schedules.map((schedule, index) => {
            return (
              <ScheduleTile
                key={schedule.title + index}
                datas={schedule}
                num={index + 1}
                top={index === 0}
                bottom={index + 1 === schedules.length}
              />
            );
          })}
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
