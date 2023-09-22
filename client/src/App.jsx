import MainPage from "./pages/mainPage"
import LeaderboardPage from "./pages/leaderBoard";
import { Route, Router } from 'wouter';

const App = () => {
  return (
    <Router>
      <Route path="/" component={MainPage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
    </Router>
  );
};

export default App;