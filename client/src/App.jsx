import MainPage from "./pages/mainPage";
import LeaderboardPage from "./pages/leaderBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/test" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
