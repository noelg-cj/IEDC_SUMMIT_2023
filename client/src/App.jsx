import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import LandingPage from "./sections/landingPage";
import AboutSummit from "./sections/AboutSummit";
import IedcCircle from "./components/IedcCircle";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Directions from "./sections/Directions";
import PrevSummut from "./sections/prevSummits";
import { useRef } from "react";
import Navbar from "./components/Navbar";

function App() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);

  const navbarItems = [
    { text: "HOME", href: "/", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    { text: "SPEAKERS", href: "#speakers", sectionRef: speakersSectionRef },
    { text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar navbarItems={navbarItems} />
      <LandingPage />
      <AboutSummit sectionRef={aboutSectionRef} />
      <IedcCircle />
      <Speakers sectionRef={speakersSectionRef} />
      <Schedule />
      <Events sectionRef={eventsSectionRef} />
      <About />
      <PrevSummut />
      <Directions sectionRef={venueSectionRef} />
      <Footer />
    </div>
  );
}

export default App;
