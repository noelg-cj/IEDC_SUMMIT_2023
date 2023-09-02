import CountDown from "../components/countDown";
import bg0 from "../assets/img/about/C0.png";
import bg1 from "../assets/img/about/C1.png";
import bg2 from "../assets/img/about/C2.png";
import logo from "../assets/img/iedcSummit.png";
import { useInView } from "react-intersection-observer";

function LandingPage({ sectionRef }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={sectionRef} className="relative w-full bg- flex flex-col pb-12">
      <img src={bg0} className="absolute right-0 -z-50" />

      <div className="absolute left-0 right-0 top-48 sm:top-20 md:top-6 lg:top-0 flex flex-col items-start w-72 md:w-[22rem] lg:w-auto -z-50">
        <img src={bg1} className="mb-[-5px]" />
        <img src={bg2} className="" />
      </div>
      <div ref={ref} className={`font-dm-sans flex flex-col self-center items-center sm:items-start md:w-9/12 pt-40 pb-24 md:pt-52 md:pb-28 ${ inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-7' } transition duration-500`}>
        <div className="flex flex-col sm:flex-row items-center pb-16">
          <img
            src={logo}
            alt="summit logo"
            className="sm:order-2 w-40 sm:w-48 lg:w-52 mb-12 sm:mb-0"
          />
          <div className="sm:order-1 flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent pb-4">
              IEDC SUMMIT
            </h1>
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#2B394366] to-[#000000D6] bg-clip-text text-transparent">
              2023
            </h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl md:text-5xl text-[#0597F2] pb-4">
          OCTOBER 12
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-1">
          COLLEGE OF ENGINEERING,
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-16">
          TRIVANDRUM
        </h1>
        <div className="flex items-center w-[232px] h-[58px] bg-[#097ED8] rounded-[30px] ">
          <div className="font-bold text-white text-2xl justify-center mx-auto cursor-pointer">
            BUY TICKETS
          </div>
        </div>
      </div>
      <CountDown />
    </div>
  );
}
export default LandingPage;
