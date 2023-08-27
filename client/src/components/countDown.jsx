import { useState, useEffect } from "react";

function CountDown() {
  const deadline = new Date("2023-10-09T00:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  function getTimeLeft() {
    const totalSec = Math.floor((deadline - Date.now()) / 1000);

    setDays(String(Math.floor(totalSec / (60 * 60 * 24))).padStart(2, "0"));
    setHours(
      String(Math.floor((totalSec % (60 * 60 * 24)) / (60 * 60))).padStart(
        2,
        "0"
      )
    );
    setMinutes(
      String(Math.floor((totalSec % (60 * 60)) / 60)).padStart(2, "0")
    );
    setSeconds(String(Math.floor(totalSec % 60)).padStart(2, "0"));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="self-center text-4xl lg:text-6xl font-medium bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text w-[85vw] sm:w-[75vw] lg:w-[55vw] bg-lime-700 grid grid-cols-4 justify-between">
      <div className=" text-center ">
        <h1>{days}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-sm lg:text-xl font-[700]">
          DAYS
        </p>
      </div>
      <div className=" text-center ">
        <h1>{hours}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-sm lg:text-xl font-[700]">
          HOURS
        </p>
      </div>
      <div className="text-center">
        <h1>{minutes}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-sm lg:text-xl font-[700]">
          MINUTES
        </p>
      </div>
      <div className="text-center">
        <h1>{seconds}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-sm lg:text-xl font-[700]">
          SECONDS
        </p>
      </div>
    </div>
  );
}

export default CountDown;
