import Tickets from "../components/Tickets";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import EventSearch from "../components/EventSearch";

function Events(props) {
  const { title, button, sectionRef, eventData, eventDescription } = props;

  const [activeLink, setActiveLink] = useState("1");

  const links = [
    { id: "1", text: "Road To Summit" },
    { id: "2", text: "Everything is Entrepreneurship" },
    { id: "3", text: "Industry of future" },
    { id: "4", text: "Startup Symposium" },
  ];

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div className="mt-4 md:pt-4 bg-zinc-50 w-full flex justify-center">
      <div
        ref={sectionRef}
        className="relative space-y-10 font-dm-sans  lg:w-10/12 w-11/12  flex flex-col "
      >
        <div className="absolute overflow-hidden z-10 opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
          <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
            {title}
          </h1>
        </div>
        <h1 className="font-[700] text-[75px] text-center text-[#0065B2]">
          {title}
        </h1>
        <EventSearch />
        <div className="w-full flex flex-col">
          <div className="flex flex-col p-0 w-full  custom2:p-10">
            <nav>
              <div className=" w-full">
                <div className=" items-start text-2xl flex flex-wrap flex-col md:flex-row  font-darker-grotesque font-semibold custom1:flex-row custom2:flex-col custom2:items-center custom1:items-start">
                  {links.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={` w-full md:w-1/4 nav-link ml-0 p-2 custom1:ml-0 ${
                        activeLink === link.id
                          ? "text-[#3866F2] bg-white rounded-md shadow-md"
                          : "text-[#858585]"
                      }`}
                    >
                      {link.text}
                    </button>
                  ))}
                  <hr className="w-full border-[1px] opacity-30 border-black"></hr>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="hidden md:flex md:flex-wrap gap-16 md:gap-0 pb-8 md:justify-evenly horiz-scroll ">
          {eventData &&
            eventData.length > 0 &&
            eventData.map(
              (ticket, index) =>
                ticket.sectionId === parseInt(activeLink) && (
                  <Tickets
                    key={index}
                    eventName={ticket.ticketTitle}
                    eventImg={ticket.ticketImg}
                    eventDescription={ticket.ticketDescription}
                    eventLink={ticket.ticketLink}
                    eventButton={ticket.ticketButton}
                  />
                )
            )}
        </div>
        <div className="md:hidden flex md:flex-wrap gap-16 md:gap-0 pb-8 md:justify-evenly horiz-scroll ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {eventData &&
              eventData.length > 0 &&
              eventData.map(
                (ticket, index) =>
                  ticket.sectionId === parseInt(activeLink) && (
                    <SwiperSlide>
                      <Tickets
                        key={index}
                        eventName={ticket.ticketTitle}
                        eventImg={ticket.ticketImg}
                        eventDescription={ticket.ticketDescription}
                        eventLink={ticket.ticketLink}
                        eventButton={ticket.ticketButton}
                      />
                    </SwiperSlide>
                  )
              )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Events;
