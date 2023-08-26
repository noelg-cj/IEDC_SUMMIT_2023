import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      <CountDown />
      <Speakers />
      <Schedule />
      <Events />
    </div>
  );
}

export default App;
