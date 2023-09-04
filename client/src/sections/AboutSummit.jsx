import Paragraph from "../components/paragraph";

import { useInView } from "react-intersection-observer";

import Img from "../assets/img/iedcSummit.png";


const AboutSummit = ({ sectionRef }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
    <div ref={sectionRef} className="relative">
      <div className="w-[900px] h-[900px] bg-transparent border-[#3866F2] border-[140px] right-[-450px] top-[350px] opacity-40 absolute rounded-full"></div>
      <div
        ref={ref}
        className={`w-10/12 mx-auto ${ inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-7' } xs:w-11/12 py-10 min-h-[80vh] font-dm-sans lg:flex place-items-center transition duration-500`}
      >
        <div className="  flex-1 lg:pr-20 box-border">
          <img src={Img} />
        </div>
        <div className="flex-1">
          <Paragraph
            header={summit.header}
            heading={summit.heading}
            content={summit.content}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSummit;
