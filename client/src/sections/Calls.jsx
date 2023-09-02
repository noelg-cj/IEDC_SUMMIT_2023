import React from "react";
import CallCard from "../components/callsCard";

function Calls(props) {
  const { title, button, sectionRef, eventData,eventDescription } = props;
  
  return (
    <div
      ref={sectionRef}
      className="  space-y-10 font-dm-sans  w-11/12 flex flex-col"
    >
      <div className="w-11/12 space-y-6 text-center self-center">
        <h1 className=" font-[700] text-[75px] text-[#0065B2]">{title}</h1>
        <p className=" font-[400] text-[24px] text-[#676C70]">
          {eventDescription}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
  {eventData && eventData.length > 0 && eventData.map((ticket, index) => (
    <CallCard
      key={index}
      buttonTitle={button}
      eventName={ticket.ticketTitle}
      eventDescription={ticket.ticketDescription}
      eventLink={ticket.ticketLink}
    />
  ))}
</div>





    </div>
  );
}

export default Calls;
