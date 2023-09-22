import MainPage from "./pages/mainPage"
import LeaderboardPage from "./pages/leaderBoard";
import { BrowserRouter as Router, Route, Routes,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/leaderboard" element={<LeaderboardPage/>}/>
    </Routes>
  </Router>
    
  );
}
// const router = createBrowserRouter(
// 	createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<MainPage />}/>
//         <Route path="/leaderboard" element={ <LeaderboardPage />} errorElement={<h2>error from auth</h2>}/>
//       {/* </Route> */}
//     // </Routes>
// 	)
// );

// function App(){
// 	return <RouterProvider router={router} />;
	
// };
export default App;
