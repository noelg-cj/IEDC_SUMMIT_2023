import Paragraph from "../components/paragraph";

import { useInView } from "react-intersection-observer";

import Img from "../assets/img/iedcSummit.png";


const AboutSummit = ({ sectionRef }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
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
    <div
      ref={ref}
      className={`w-10/12 ${ inView ? 'opacity-1' : 'opacity-0' } xs:w-11/12 py-10 min-h-[80vh] font-dm-sans lg:flex place-items-center transition duration-300`}
    >

      {inView ? (
        <>
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
        </>
      ): null}

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
>
    </div>
  );
};

export default AboutSummit;
