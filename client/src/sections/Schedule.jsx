import { useState } from "react";
import ScheduleTile from "../components/ScheduleTile";
import { schedules } from "../data";

const Schedule = () => {
  const [location, setLocation] = useState("0");
  const selectLocation = (e) => {
    setLocation(e.target.getAttribute("data-loc-id"));
  };

  return (
    <div className="px-6 sm:px-16 md:w-11/12 py-10 sm:py-20 font-darker-grotesque">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl text-start font-semibold">
        THE SCHEDULE
      </h1>

      <div className="flex gap-4 py-6 sm:py-8 lg:py-16 justify-between text-xl sm:text-2xl lg:text-3xl font-semibold lg:mx-[16vw]">
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            location === "0" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={0}
        >
          DJ Hall
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            location === "1" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={1}
        >
          Sargam Stage
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            location === "2" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={2}
        >
          CGPU Substage
        </div>
        <div
          className={`transition-colors	cursor-pointer	duration-500 ${
            location === "2" ? "" : "text-theme-blue2"
          }`}
          onClick={selectLocation}
          data-loc-id={2}
        >
          Substage
        </div>
      </div>

      <div className="flex flex-col lg:flex-row text-lg sm:text-xl lg:text-2xl font-medium">
        <div className="lg:w-3/12 py-0 lg:py-10 lg:pl-10 flex gap-6 lg:block">
          Filter By:
          <div className="lg:leading-6 flex lg:flex-col gap-3 lg:gap-0">
            <div>
              <input
                type="radio"
                className="align-middle cursor-pointer"
                name="filter-by"
                checked
              />{" "}
              Venue
            </div>
            <div>
              <input
                type="radio"
                className="align-middle cursor-pointer"
                name="filter-by"
              />{" "}
              Type
            </div>
          </div>
        </div>

        <div className="flex-1 lg:order-first">
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
      </div>
    </div>
  );
};

export default Schedule;
