import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/user/MovieDetailPage";
import MoviePage from "../pages/user/MoviePage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movieDetail" element={<MovieDetailPage />} />
      <Route path="/movie" element={<MoviePage />} />
    </Routes>
  );
};

export default UserRoutes;
