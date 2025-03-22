import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
// import PrivateRoute from "./routes/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes cho user */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Routes cho admin - yêu cầu quyền admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}
