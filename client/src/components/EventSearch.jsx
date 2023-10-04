import React, { useEffect, useState } from "react";

import Tickets from "../components/Tickets";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { eventData } from "../data";
import { FaSearch } from "react-icons/fa";

let searchEvents = [];

const EventSearch = () => {
  const [search, setSearch] = useState("");
  const [searchEvents, setSearchEvents] = useState([]);
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

  const handleSearch = (e) => {
    setSearch((string) => e.target.value);
  };

  useEffect(() => {
    setSearchEvents(
      eventData.filter((event) =>
        event.ticketTitle.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <div className="self-center relative z-20 w-full sm:w-[75%] md:w-[50%]">
        <input
          type="search"
          value={search}
          placeholder="Search event"
          onChange={handleSearch}
          className="w-full px-6 py-2 z-30 rounded-full border-2 border-[#777] text-lg outline-none"
        />
        <FaSearch className="absolute right-6 text-[#999] top-1/3" />
      </div>
      <div className="">
        <Swiper
          spaceBetween={40}
          slidesPerView={slides}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {searchEvents &&
            searchEvents.length > 0 &&
            searchEvents.length < eventData.length &&
            searchEvents.map((ticket, index) => (
              <SwiperSlide className="mb-12">
                <Tickets
                  key={index}
                  eventName={ticket.ticketTitle}
                  eventImg={ticket.ticketImg}
                  eventDescription={ticket.ticketDescription}
                  eventLink={ticket.ticketLink}
                  eventButton={ticket.ticketButton}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default EventSearch;
