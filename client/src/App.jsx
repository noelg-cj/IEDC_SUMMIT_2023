import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";

import AboutSummit from "./sections/AboutSummit";

import IedcCircle from "./components/IedcCircle";

import About from "./sections/About"

function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      <CountDown />

      <AboutSummit />

      <IedcCircle />

      <Speakers />
      <Schedule />
      <Events />
      <About />
    </div>
  );
}

export default App;
