import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
import IedcCircle from "./components/IedcCircle";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      <CountDown />
      <IedcCircle />
      <Speakers />
      <Schedule />
      <Events />
    </div>
  );
}

export default App;
