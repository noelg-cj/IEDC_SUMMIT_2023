import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import Calls from "./sections/Calls";
import LandingPage from "./sections/landingPage";
import AboutSummit from "./sections/AboutSummit";
import IedcCircle from "./components/IedcCircle";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Directions from "./sections/Directions";
import PrevSummut from "./sections/prevSummits";
import Team from "./sections/Team";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import { VolunteerCalls } from "./data.js";

function App() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);

  const navbarItems = [
    { text: "HOME", href: "", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    //{ text: "", href: "#speakers", sectionRef: speakersSectionRef },
    //{ text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar navbarItems={navbarItems} />
      <LandingPage sectionRef={homeSectionRef} />
      <AboutSummit sectionRef={aboutSectionRef} />
      <IedcCircle />
      <About />
      <PrevSummut />
      <Calls
        title="Volunteer Calls"
        button="Apply Now"
        eventData={VolunteerCalls}
        sectionRef={eventsSectionRef}
        eventDescrition=""
      />
      <Directions sectionRef={venueSectionRef} />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
