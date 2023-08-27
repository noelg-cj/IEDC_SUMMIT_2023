import React, { useState, useEffect } from "react";

function CountDown() {
  const deadline = new Date("2023-10-09T00:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  function getTimeLeft() {
    const totalSec = Math.floor((deadline - Date.now()) / 1000);

    setDays(Math.floor(totalSec / (60 * 60 * 24)));
    setHours(Math.floor((totalSec % (60 * 60 * 24)) / (60 * 60)));
    setMinutes(Math.floor((totalSec % (60 * 60)) / 60));
    setSeconds(Math.floor(totalSec % 60));
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
    <div className=" text-6xl font-medium bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text w-[550px] h-[83.45px] bg-lime-700  flex flex-row justify-between">
      <div className=" text-center ">
        <h1>{days}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl font-[700]">
          DAYS
        </p>
      </div>
      <div className=" text-center ">
        <h1>{hours}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl font-[700]">
          HOURS
        </p>
      </div>
      <div className="text-center">
        <h1>{minutes}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl font-[700]">
          MINUTES
        </p>
      </div>
      <div className="text-center">
        <h1>{seconds}</h1>
        <p className="font-thin bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl font-[700]">
          SECONDS
        </p>
      </div>
    </div>
  );
}

export default CountDown;
