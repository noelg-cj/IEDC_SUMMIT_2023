import Paragraph from "../components/paragraph";
import { useInView } from "react-intersection-observer";
import Img from "../assets/img/iedcSummit.png";
import aboutVideo from "../assets/aboutVideo.mp4"

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
      </>
    ),
  };

  return (
    <div ref={sectionRef} className="relative z-20">
      <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] bg-transparent border-[#3866F2] border-[70px] md:border-[100px] lg:border-[140px] right-[-250px] md:right-[-350px] lg:right-[-450px] top-[750px] md:top-[1000px] lg:top-[350px] opacity-40 absolute rounded-full"></div>
      <div
        ref={ref}
        className={`w-10/12 mx-auto ${ inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-7' } xs:w-11/12 py-10 min-h-[80vh] font-dm-sans flex flex-col lg:flex-row place-items-center transition duration-500`}
      >
        <div className="flex-1 flex-grow flex h-80 lg:pr-20 box-border my-5">
          <video
          style={{borderRadius:'5px'}}
          height="100%"
          width="100%"
          src={aboutVideo}
          
          controls
          className="shadow-lg"
        ></video>
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
