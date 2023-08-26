import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
import AboutSummit from "./sections/AboutSummit";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      <CountDown />
      <AboutSummit />
      <Speakers />
      <Schedule />
      <Events />
    </div>
  );
}

export default App;
