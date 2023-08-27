import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
import Directions from "./sections/Direction";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      
      <CountDown/>
      <Speakers/>
      <Events/>
      <Directions/ >
    </div>
  );
}

export default App;
