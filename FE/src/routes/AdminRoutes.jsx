import { Routes, Route } from "react-router-dom";
import AddCategory from "../pages/admin/AddCategory.jsx";
import AddMovie from "@/pages/admin/AddMovie.jsx";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/addmovie" element={<AddMovie />} />
    </Routes>
  );
};

export default AdminRoutes;
