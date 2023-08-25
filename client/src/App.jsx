import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center">
      <Speakers/>
      <Events/>
    </div>
  );
}

export default App;
