import MainPage from "./pages/mainPage"
import LeaderboardPage from "./pages/leaderBoard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/LeaderBoard" element={<LeaderboardPage/>}/>
    </Routes>
  </Router>
    
  );
}

export default App;
