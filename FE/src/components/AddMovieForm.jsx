import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function AddMovieForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  // Hàm tải ảnh lên Cloudinary
  const uploadImage = async (file, field) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cinema_booking"); // Thay bằng upload preset của bạn

    setUploading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/democloud/image/upload",
        formData
      );
      setValue(field, res.data.secure_url); // Gán URL ảnh vào form
    } catch (error) {
      console.error("Lỗi khi tải ảnh lên:", error);
      alert("Tải ảnh thất bại!");
    } finally {
      setUploading(false);
    }
  };

  // Xử lý gửi form
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/movies",
        data
      );
      if (response.status === 201) {
        setMessage("Thêm phim thành công!");
        reset();
      }
    } catch (error) {
      console.error("Lỗi khi thêm phim:", error);
      setMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Thêm Phim Mới</h2>
      {message && <p className="text-center text-green-600">{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Tên phim"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("director")}
          type="text"
          placeholder="Đạo diễn"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("actor")}
          type="text"
          placeholder="Diễn viên"
          className="w-full p-2 border rounded"
        />
        <textarea
          {...register("description")}
          placeholder="Mô tả phim"
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          {...register("duration", { required: true })}
          type="number"
          placeholder="Thời lượng (phút)"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("releaseDate")}
          type="date"
          className="w-full p-2 border rounded"
        />

        {/* Upload Poster */}
        <label className="block font-semibold">Poster:</label>
        <input
          type="file"
          onChange={(e) => uploadImage(e.target.files[0], "posterUrl")}
          className="w-full p-2 border rounded"
        />
        {uploading && <p className="text-blue-500">Đang tải ảnh lên...</p>}

        {/* Upload Banner */}
        <label className="block font-semibold">Banner:</label>
        <input
          type="file"
          onChange={(e) => uploadImage(e.target.files[0], "bannerUrl")}
          className="w-full p-2 border rounded"
        />

        {/* Upload Trailer Thumbnail */}
        <label className="block font-semibold">Thumbnail Trailer:</label>
        <input
          type="file"
          onChange={(e) => uploadImage(e.target.files[0], "trailerUrl")}
          className="w-full p-2 border rounded"
        />

        <input
          {...register("ageLimit")}
          type="number"
          placeholder="Giới hạn tuổi"
          className="w-full p-2 border rounded"
        />
        <select
          {...register("categoryId")}
          className="w-full p-2 border rounded"
        >
          <option value="1">Hành động</option>
          <option value="2">Kinh dị</option>
          <option value="3">Hài</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {uploading ? "Đang tải..." : "Thêm Phim"}
        </button>
      </form>
    </div>
  );
}
