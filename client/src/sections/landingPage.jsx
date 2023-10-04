import CountDown from "../components/countDown";
import bg0 from "../assets/img/about/C0.png";
import bg1 from "../assets/img/about/C1.png";
import bg2 from "../assets/img/about/C2.png";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Tshirt from "../components/Tshirt";

function LandingPage({ sectionRef }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    document.body.style.overflow = modal ? "unset" : "hidden";
    setModal(!modal);
  };
  return (
    <div ref={sectionRef} className="relative w-full flex flex-col pb-12">
      <img src={bg0} className="absolute right-0 z-10" />
      <div className="absolute left-0 right-0 top-48 sm:top-20 md:top-6 lg:top-0 flex flex-col items-start w-72 md:w-[22rem] lg:w-auto z-10">
        <img src={bg1} className="mb-[-5px]" />
        <img src={bg2} />
      </div>
      <div
        ref={ref}
        className={`font-dm-sans flex flex-col self-center items-center sm:items-start md:w-9/12 pb-24 pt-24 md:pt-28 md:pb-14 z-20 ${
          inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-7"
        } transition duration-500`}
      >
        <div className="flex flex-col sm:flex-row items-center pb-16">
          <div className="sm:order-1 flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent pb-2">
              IEDC SUMMIT
            </h1>
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#2B394366] to-[#000000D6] bg-clip-text text-transparent">
              2023
            </h1>
          </div>
        </div>
        <CountDown />
        <h1 className="font-bold text-2xl md:text-5xl text-[#0597F2] pb-4">
          OCTOBER 12
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-0">
          COLLEGE OF ENGINEERING,
        </h1>
        <h1 className="font-semibold text-xl md:text-3xl text-[#676C70] pb-4">
          TRIVANDRUM
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center w-[232px] h-[58px] bg-[#0597F2] cursor-pointer rounded-[30px] hover:bg-gradient-to-tr from-[#0597F2] to-[#4656E1]">
            <a
              onClick={() => {
                popup("iedc-summit-2023-230401");
              }}
              className="font-bold text-white text-2xl justify-center mx-auto"
            >
              Grab Your Tickets
            </a>
          </div>
          <button
            className="border-2 border-[#0698F3] rounded-[30px] px-4 py-2 text-2xl text-[#0698F3] font-bold hover:bg-gradient-to-br from-[#0597F2] to-[#6F04D9] hover:text-white"
            onClick={toggleModal}
          >
            Official Merchandise
          </button>
        </div>
      </div>
      {modal && <Tshirt toggleModal={toggleModal} />}
    </div>
  );
}
export default LandingPage;
