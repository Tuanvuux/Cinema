import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Category
export const addCategory = async (category) => {
  const response = await api.post("/categories", category);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

//Movie
export const getMovieById = async (movieId) => {
  const response = await api.get(`/movies/${movieId}`);
  return response.data;
};

export const addMovie = async (movieData) => {
  const response = await api.post("/movies", movieData);
  return response.data;
};
export const getMovies = async () => {
  const response = await api.get("/movies");
  return response.data;
};
//User
export const registerAccount = async (formData) => {
  const response = await api.post("/register", formData);
  return response.data;
};
export const login = async ({ username, password }) => {
  const response = await api.post("/login", null, {
    params: { username, password },
  });
  return response.data;
};
