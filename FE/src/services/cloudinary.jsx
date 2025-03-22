import axios from "axios";

const CLOUD_NAME = "dm8flim64";
const UPLOAD_PRESET = "cinema_booking";

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    return res.data.secure_url;
  } catch (error) {
    console.error("Lỗi tải ảnh lên Cloudinary:", error);
    throw new Error("Tải ảnh thất bại!");
  }
};
