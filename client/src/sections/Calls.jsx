import React, { useEffect, useState } from "react";
import CallCard from "../components/callsCard";
import "../assets/css/textBackdrop.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Calls(props) {
  const { title, sectionRef, eventData, eventDescription } = props;
  const [slides, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesPerView(1);
      } else if (screenWidth <= 1200) {
        setSlidesPerView(2);
      } else if (screenWidth <= 1550) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div
      ref={sectionRef}
      className="relative space-y-10 font-dm-sans mt-10  md:w-10/12 w-11/12  flex flex-col"
    >
      <div className="absolute overflow-hidden opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
        <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
          {title}
        </h1>
      </div>
      <div className="w-full space-y-6 text-center self-center">
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className=" font-[400] text-[24px] text-[#676C70]">
          {eventDescription}
        </p>
      </div>
      <div className="w-5/6space-x-5 flex md:flex-wrap overflow-x-auto scroll-smooth gap-16 md:gap-0 pb-8 md:justify-evenly horiz-scroll">
        <Swiper
          spaceBetween={0}
          slidesPerView={slides}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {eventData &&
            eventData.length > 0 &&
            eventData.map((call, index) => (
              <SwiperSlide>
                <CallCard
                  key={index}
                  buttonTitle="Apply Now"
                  eventImg={call.poster}
                  eventName={call.title}
                  eventDescription={call.description}
                  eventLink={call.link}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Calls;
