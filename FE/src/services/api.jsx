import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Lấy danh mục phim
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy danh mục phim:", error);
    return [];
  }
};

// Gửi dữ liệu phim lên backend
export const addMovie = async (movieData) => {
  try {
    const response = await axios.post(`${BASE_URL}/movies`, movieData);
    return response.status === 201;
  } catch (error) {
    console.error("Lỗi khi thêm phim:", error);
    throw new Error("Không thể thêm phim");
  }
};

export const addCategory = async (category) => {
  return axios.post(`${BASE_URL}/categories`, category, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCategories = async () => {
  return axios.get(`${BASE_URL}/categories`);
};
