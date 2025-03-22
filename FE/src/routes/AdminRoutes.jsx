import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/admin/HomePage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AdminRoutes;
