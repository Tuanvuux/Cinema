import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  uploadImageToCloudinary,
  uploadVideoToCloudinary,
} from "../services/cloudinary";
import { addMovie, getCategories } from "@/services/api.jsx";

export default function AddMovieForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories ();
  }, []);

  const fetchCategories  = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Lỗi lấy danh sách thể loại:", error);
    }
  };
  const uploadImage = async (file, field) => {
    setUploading(true);
    try {
      const url = await uploadImageToCloudinary(file);
      setValue(field, url); // Lưu URL ảnh vào form
    } catch (error) {
      alert("Tải ảnh thất bại!");
    } finally {
      setUploading(false);
    }
  };

  // Hàm tải video lên Cloudinary
  const uploadVideo = async (file) => {
    setUploading(true);
    try {
      const url = await uploadVideoToCloudinary(file);
      setValue("trailerUrl", url); // Lưu URL video vào form
      setVideoPreview(url); // Hiển thị video preview
    } catch (error) {
      alert("Tải video thất bại!");
    } finally {
      setUploading(false);
    }
  };

  // Xử lý gửi form
  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      category: { categoryId: data.categoryId },
    };

    try {
      await addMovie(formattedData);
      console.log("Dữ liệu phim gửi đi:", formattedData);
      setMessage("Thêm phim thành công!");
      reset();
      setVideoPreview("");
    } catch (error) {
      setMessage("Thêm phim thất bại: " + error.message);
    }
  };

  return (
      <div className="max-w-lg mx-auto p-6 bg-black shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Thêm Phim Mới</h2>
        {message && (
            <p
                className={`text-center ${
                    message.includes("thất bại") ? "text-red-600" : "text-green-600"
                }`}
            >
              {message}
            </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Tên phim"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <input
              {...register("director")}
              type="text"
              placeholder="Đạo diễn"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <input
              {...register("actor")}
              type="text"
              placeholder="Diễn viên"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <textarea
              {...register("description")}
              placeholder="Mô tả phim"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          ></textarea>
          <input
              {...register("duration", { required: true })}
              type="number"
              placeholder="Thời lượng (phút)"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <input
              {...register("releaseDate")}
              type="date"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <input
              {...register("ageLimit")}
              type="number"
              placeholder="Giới hạn tuổi"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />
          <input
              {...register("caption")}
              placeholder="Ngôn ngữ"
              type="text"
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />

          {/* Upload Poster */}
          <label className="block font-semibold text-white">Poster:</label>
          <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files[0], "posterUrl")}
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />

          {/* Upload Banner */}
          <label className="block font-semibold text-white">Banner:</label>
          <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files[0], "bannerUrl")}
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />

          {/* Upload Trailer */}
          <label className="block font-semibold text-white">Trailer:</label>
          <input
              type="file"
              accept="video/*"
              onChange={(e) => uploadVideo(e.target.files[0])}
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          />

          {/* Hiển thị video sau khi tải lên */}
          {videoPreview && (
              <video className="w-full mt-2" controls>
                <source src={videoPreview} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
          )}

          {/* Dropdown danh mục lấy từ database */}
          <label className="block font-semibold text-white">Thể loại:</label>
          <select
              {...register("categoryId", { required: true })}
              className="w-full p-2 border rounded bg-black text-white border-gray-700"
          >
            <option value="">Chọn thể loại</option>
            {categories.map((category) => (
                <option
                    className="bg-black"
                    key={category.categoryId}
                    value={category.categoryId}
                >
                  {category.name}
                </option>
            ))}
          </select>

          <button
              type="submit"
              disabled={uploading}
              className={`w-full ${
                  uploading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              } w-full p-2 border rounded bg-black text-white border-gray-700`}
          >
            {uploading ? "Đang tải..." : "Thêm Phim"}
          </button>
        </form>
      </div>
  );
}