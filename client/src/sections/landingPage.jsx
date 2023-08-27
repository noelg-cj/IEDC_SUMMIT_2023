import Navbar from "../components/Navbar";
import CountDown from "../components/countDown";
import bg0 from "../assets/img/about/C0.png";
import bg1 from "../assets/img/about/C1.png";
function LandingPage() {
  return (
    <div className="relative w-full bg- flex flex-col">
      <img src={bg0} className="absolute right-0" />
      <img src={bg1} className="absolute left-0" />
      <Navbar />
      <div className="font-dm-sans flex flex-col self-center items-left w-9/12 py-28">
        <h className="font-bold text-8xl bg-gradient-to-b from-[#097ED8] to-[#000000] bg-clip-text text-transparent pb-4">
          IEDC SUMMIT
        </h>
        <h className="font-bold text-7xl bg-gradient-to-b from-[#2B394366] to-[#000000] bg-clip-text text-transparent pb-16">
          2023
        </h>
        <h className="font-bold text-5xl text-[#0065B2] pb-4">SEPTEMBER 12</h>
        <h className="font-semibold text-3xl text-[#676C70] pb-1">
          COLLEGE OF ENGINEERING,
        </h>
        <h className="font-semibold text-3xl text-[#676C70] pb-16">
          TRIVANDRUM
        </h>
        <div className="flex  items-center  w-[232px] h-[58px] bg-[#097ED8] rounded-[30px]">
          <a className="font-bold text-white text-2xl justify-center mx-auto">
            BUY TICKETS
          </a>
        </div>
      </div>
      <CountDown />
    </div>
  );
}
export default LandingPage;
