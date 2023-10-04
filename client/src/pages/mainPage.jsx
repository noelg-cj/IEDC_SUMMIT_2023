// import Schedule from "./sections/Schedule";
import Events from "../sections/Events";
import Calls from "../sections/Calls";
import LandingPage from "../sections/landingPage";
import AboutSummit from "../sections/AboutSummit";
import IedcCircle from "../components/IedcCircle";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Directions from "../sections/Directions";
import PrevSummut from "../sections/prevSummits";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { joinUs, faqData, eventData } from "../data";
import LoadingScreen from "../sections/loadingScreen";
import FAQ from "../sections/FAQ";
import Speakers from "../sections/Speakers";

function mainPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);
  const navbarItems = [
    { text: "HOME", href: "#", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    { text: "SPEAKERS", href: "#speakers", sectionRef: speakersSectionRef },
    { text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden bg-zinc-50">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar navbarItems={navbarItems} />
          <LandingPage sectionRef={homeSectionRef} />
          <AboutSummit sectionRef={aboutSectionRef} />
          <IedcCircle />
          <loadingScreen/>
          <Events
            title="Events"
            button="Register Now"
            eventData={eventData}
            sectionRef={eventsSectionRef}
            eventDescrition=""
          />
          <Speakers sectionRef={speakersSectionRef} />
          <Calls title="Join Us" eventData={joinUs} eventDescrition="" />
          <PrevSummut />
          <About />
          <Directions sectionRef={venueSectionRef} />
          <FAQ faqData={faqData} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default mainPage;
