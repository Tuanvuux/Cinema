import { useForm } from "react-hook-form";
import { useState } from "react";
import { addCategory } from "../services/api";
import { uploadImageToCloudinary } from "../services/cloudinary";

export default function AddCategoryForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Lưu trữ file ảnh

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Vui lòng chọn ảnh trước!");
      return;
    }

    setUploading(true);
    try {
      const url = await uploadImageToCloudinary(selectedFile);
      setValue("imageUrl", url);
      setMessage("Ảnh đã tải lên thành công!");
    } catch (error) {
      setMessage("Lỗi khi tải ảnh, vui lòng thử lại.");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      await addCategory(data);
      setMessage("Thêm danh mục thành công!");
      reset();
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
      setMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Thêm Danh Mục</h2>
      {message && <p className="text-center text-green-600">{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Tên danh mục"
          className="w-full p-2 border rounded"
        />

        {/* Upload Ảnh Danh Mục */}
        <label className="block font-semibold">Ảnh Danh Mục:</label>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="w-full p-2 border rounded"
        />

        {/* Nút tải ảnh lên */}
        <button
          type="button"
          onClick={handleUpload}
          className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
          disabled={!selectedFile || uploading}
        >
          {uploading ? "Đang tải ảnh..." : "Tải ảnh lên"}
        </button>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Thêm Danh Mục
        </button>
      </form>
    </div>
  );
}
