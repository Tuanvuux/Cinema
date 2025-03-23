import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Payment from "./components/Payment";
import SeatSelection from "./components/SeatSelection";
import MovieSlider from "./components/MovieSlider";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}
