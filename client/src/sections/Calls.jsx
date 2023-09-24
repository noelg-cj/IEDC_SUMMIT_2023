import React from "react";
import CallCard from "../components/callsCard";
import "../assets/css/textBackdrop.css";

function Calls(props) {
  const { title, sectionRef, eventData, eventDescription } = props;

  const callCards = [];
  eventData &&
    eventData.length > 0 &&
    eventData.forEach((ticket, index) =>
      callCards.push(
        <CallCard
          key={index}
          buttonTitle={ticket.ticketButton}
          eventImg={ticket.ticketImg}
          eventName={ticket.ticketTitle}
          eventDescription={ticket.ticketDescription}
          eventLink={ticket.ticketLink}
        />
      )
    );

  const goPrev = (e) => {
    const div = e.target.nextElementSibling;
    const isEnd = div.scrollLeft === 0;
    div.scrollLeft = isEnd
      ? div.firstChild.scrollWidth * eventData.length
      : div.scrollLeft - div.firstChild.scrollWidth * 2.05 - 25;
  };

  const goNext = (e) => {
    const div = e.target.previousElementSibling;
    const isEnd =
      div.scrollLeft >= div.firstChild.scrollWidth * (eventData.length - 2.2);
    div.scrollLeft = isEnd
      ? 0
      : div.scrollLeft + div.firstChild.scrollWidth * 2.05 + 25;
  };

  return (
    <div
      ref={sectionRef}
      className="relative space-y-10 font-dm-sans mt-10  md:w-10/12 w-11/12  flex flex-col"
    >
      <div className="absolute overflow-hidden -z-10 opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
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
      <div className="flex items-center flex-row gap-12">
        <button
          className="hidden md:block text-4xl font-bold hover:bg-[#aaa] px-3 rounded-[5px]"
          onClick={goPrev}
        >
          &#x21e6;
        </button>
        <div className="flex flex-wrap md:flex-nowrap overflow-scroll md:gap-6 px-8 scroll-smooth">
          {callCards}
        </div>
        <button
          className="hidden md:block text-4xl font-bold hover:bg-[#aaa] px-3 rounded-[5px]"
          onClick={goNext}
        >
          &#x21e8;
        </button>
      </div>
    </div>
  );
}

export default Calls;
