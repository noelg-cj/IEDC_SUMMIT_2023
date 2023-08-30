import React from "react";
import { useInView } from "react-intersection-observer";
import Speaker from "../components/SpeakerCard";
import WaveLine from "../components/WaveLine";
import { speakers } from "../data";
import "../assets/css/animations.css";
// import { useMediaQuery } from "react-responsive";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

function Speakers({ sectionRef }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // if (!isMobile) {
  return (
    <div
      ref={sectionRef}
      className="relative md:h-screen w-full mt-10 flex-shrink-0 bg-gradient-to-b from-[#097ED8] to-[#001E35]  px-7 py-12 overflow-hidden"
    >
      <div
        ref={ref}
        className={`${inView ? "animate-right" : "animate-right-return"}`}
      >
        <WaveLine
          position="absolute top-16 md:top-0 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-20 md:top-4 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-24 md:top-8 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-28 md:top-12 -right-48"
          direction={true}
        />
        <WaveLine
          position="absolute top-32 md:top-16 -right-48"
          direction={true}
        />
      </div>
      <div
        className={`flex justify-center text-white text-6xl font-darker-grotesque text-center font-medium whitespace-nowrap ${
          // inView ? "animate-move" : "animate-move-return"
          ""
        }`}
      >
        <h1>The Speakers</h1>
      </div>
      <div
        className={`lg:h-3/4 4/5 ${
          // inView
          //   ? "animate-speakers-move"
          //   : "animate-speakers-move-return hidden"
          ""
        }`}
      >
        <div
          className={`mb-20 md:mb-40 mt-10 md:grid md:grid-cols-4 flex flex-col items-center gap-20 md:ml-10`}
        >
          {speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index} />
          ))}
        </div>
      </div>

      <div className={`${inView ? "animate-left" : "animate-left-return"}`}>
        <WaveLine position="absolute bottom-0 -left-48" direction={false} />
        <WaveLine position="absolute -bottom-4 -left-48" direction={false} />
        <WaveLine position="absolute -bottom-8 -left-48" direction={false} />
        <WaveLine
          position="absolute bottom-4 md:-bottom-12 -left-48"
          direction={false}
        />
        <WaveLine
          position="absolute bottom-8 md:-bottom-16 -left-48"
          direction={false}
        />
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className="my-5">
  //       <div className="font-darker-grotesque text-5xl text-black text-center font-semibold">
  //         <h1>The Speakers</h1>
  //       </div>
  //       <Swiper
  //         spaceBetween={50}
  //         slidesPerView={1}
  //         onSlideChange={() => console.log("slide change")}
  //         onSwiper={(swiper) => console.log(swiper)}
  //         className="bg-gray-300"
  //       >
  //         {speakers.map((speaker) => (
  //           <SwiperSlide>
  //             <Speaker speaker={speaker} key={speaker.name} />
  //           </SwiperSlide>
  //         ))}
  //         {/* <SwiperSlide>Slide 1</SwiperSlide>
  //         <SwiperSlide>Slide 2</SwiperSlide>
  //         <SwiperSlide>Slide 3</SwiperSlide>
  //         <SwiperSlide>Slide 4</SwiperSlide> */}
  //       </Swiper>
  //     </div>
  //   );
  // }
}

export default Speakers;
