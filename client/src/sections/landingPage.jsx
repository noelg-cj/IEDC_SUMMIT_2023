import React from "react";
import Navbar from "../components/Navbar";
import CountDown from "../components/countDown";
import bg0 from "../assets/img/about/C0.png";
import bg1 from "../assets/img/about/C1.png";
function landingPage() {
  return (
    <div className="relative w-full bg- flex flex-col">
      <img src={bg0} className="absolute" />
      <img src={bg1} className="absolute" />
      <Navbar />
      <div className="font-dm-sans flex flex-col  self-center items-left w-10/12 ">
        <h className="font-[800] text-[96.62px] text-[] bg-gradient-to-b from-[#097ED8] to-[#000000] bg-clip-text text-transparent">
          IEDC SUMMIT
        </h>
        <h className="font-[700] text-[80.76px] text-[] bg-gradient-to-b from-[#2B394366] to-[#000000] bg-clip-text text-transparent">
          2023
        </h>
        <h className="font-[700] text-[50px] text-[#0065B2]">SEPTEMBER 12</h>
        <h className="font-[800] text-[30px] text-[#676C70]">
          COLLEGE OF ENGINEERING,
        </h>
        <h className="font-[800] text-[30px] text-[#676C70]">TRIVANDRUM</h>
        <div className="flex  items-center  w-[232px] h-[58px] bg-[#097ED8] rounded-[30px]">
          <a className="font-[700] text-white text-[24px] justify-center mx-auto">
            BUY TICKETS
          </a>
        </div>
      </div>
      <CountDown />
    </div>
  );
}
export default landingPage;
