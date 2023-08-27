import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";

import AboutSummit from "./sections/AboutSummit";

import IedcCircle from "./components/IedcCircle";

import About from "./sections/About";

import Footer from "./sections/Footer";
import Directions from "./sections/Directions";

function App() {
  return (
    <div className="flex flex-col items-center">
      <CountDown />

      <AboutSummit />

      <IedcCircle />

      {/* <Speakers /> */}
      <Schedule />
      <Events />
      <About />
      <Directions />
      <Footer />
    </div>
  );
}

export default App;
