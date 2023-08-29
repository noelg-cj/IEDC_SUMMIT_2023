import React from "react";
import Paragraph from "../components/paragraph";

const AboutSummit = ({ sectionRef }) => {
  const summit = {
    header: "ABOUT IEDC SUMMIT",
    heading: "Asia's largest summit for aspiring student entrepreneurs",
    content: (
      <>
        <p>
          Kerala Startup Mission is organizing the eight edition of the flagship
          event- IEDC Summit 2023 and , College of Engineering Trivandrum,
          heartily welcomes you to witness and be a part of Asia's largest
          summit for aspiring student innovators and entrepreneurs.
        </p>

        <p>
          IEDC Summit is an amalgamation of events from a plethora of domains,
          including technology, entrepreneurship, skill development, and so much
          more. It facilitates as a platform for connecting student innovators,
          industry leaders, and various startups in addition to providing an
          opportunity for them to engage and network, and form connections that
          lasts for a lifetime. Meet highly influential entrepreneurs, imbibe
          from panel discussions, expand your horizons in technical knowledge
          and financial literacy.
        </p>

        <p>Let's unravel dimensions and unite perspectives together!</p>
      </>
    ),
  };
  // console.log(sectionRef);
  return (
    <div
      ref={sectionRef}
      className="w-10/12 xs:w-11/12 py-10 min-h-[80vh] font-dm-sans lg:flex place-items-center"
    >
      <div className="  flex-1 lg:pr-20 box-border">
        <div className=" min-w-5/6 h-96 bg-slate-400"></div>
      </div>
      <div className="flex-1">
        <Paragraph
          header={summit.header}
          heading={summit.heading}
          content={summit.content}
        />
      </div>
    </div>
  );
};

export default AboutSummit;
