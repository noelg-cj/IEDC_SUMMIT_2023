import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      
      <CountDown/>
      <Speakers/>
      <Events/>
      <Footer />
    </div>
  );
}

export default App;
