import React from "react";
import Tickets from "../components/Tickets";

function Events(props) {
  const { title, button, sectionRef, eventData,eventDescription } = props;
  
  return (
    <div
      ref={sectionRef}
      className="  relative space-y-10 font-dm-sans  lg:w-10/12 w-11/12  flex flex-col l"
    ><div className="absolute overflow-hidden -z-10 opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
    <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
      {title}
    </h1>
  </div>
      <div className="w-11/12 space-y-6 text-center self-center">
        <h1 className=" font-[700] text-[75px] text-[#0065B2]">{title}</h1>
        <p className=" font-[400] text-[24px] text-[#676C70]">
          {eventDescription}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
  {eventData && eventData.length > 0 && eventData.map((ticket, index) => (
    <Tickets
      key={index}
      buttonTitle={button}
      eventName={ticket.ticketTitle}
      eventImg={ticket.ticketImg}
      eventDescription={ticket.ticketDescription}
      eventLink={ticket.ticketLink}
    />
  ))}
</div>





    </div>
  );
}

export default Events;
