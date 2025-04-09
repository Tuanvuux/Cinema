import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
// import PrivateRoute from "./routes/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes cho user */}
        <Route path="/*" element={<PublicRoute />} />
        {/* Routes cho admin - yêu cầu quyền admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );

}
