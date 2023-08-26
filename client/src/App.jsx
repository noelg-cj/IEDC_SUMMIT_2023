import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";

import AboutSummit from "./sections/AboutSummit";

import IedcCircle from "./components/IedcCircle";

function App() {
  return (
    <div>
      <CountDown />

      <AboutSummit />

      <IedcCircle />

      <Speakers />
      <Schedule />
      <Events />
    </div>
  );
}

export default App;
