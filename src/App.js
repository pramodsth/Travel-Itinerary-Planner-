import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ItineraryPage from "./ItineraryPage";
import UserProfile from "./UserProfile";
import SearchDestinations from "./SearchDestinations";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/search" element={<SearchDestinations />} />
      </Routes>
    </Router>
  );
}

export default App;
