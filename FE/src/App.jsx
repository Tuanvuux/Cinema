import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
// import PrivateRoute from "./routes/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";
import Register from "./pages/Register";
import Payment from "./components/Payment";
import SeatSelection from "./components/SeatSelection";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes cho user */}
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        {/* Routes cho admin - yêu cầu quyền admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}
