import React from "react";

const MovieDetail = () => {
  const movie = {
    title: "QUỶ NHẬP TRÀNG (T18)",
    director: "Pom Nguyễn",
    actors: "Khả Như, Quang Tuấn, ...",
    genre: "Kinh dị",
    releaseDate: "05-03-2025",
    duration: "120 phút",
    language: "Phụ đề Tiếng Anh",
    rating: "C18 - PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 18 TUỔI",
    description:
      "Lấy cảm hứng từ truyền thuyết kinh dị nhất về 'người chết sống dậy', Quỷ Nhập Tràng là câu chuyện được lấy bối cảnh tại một ngôi làng chuyên nghề mai táng, gắn liền với những hoạt động đào mộ, tẩm liệm và chôn cất người chết.",
    image: "https://metiz.vn/media/poster_film/123_yfizqOP.jpg", // Thay bằng URL ảnh thật
  };

  return (
    <div className="flex p-6 bg-white shadow-md rounded-lg">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-48 h-auto rounded-lg"
      />
      <div className="ml-6 text-black">
        <h2 className="text-2xl font-bold text-gray-900">{movie.title}</h2>
        <p>
          <strong>Đạo diễn:</strong> {movie.director}
        </p>
        <p>
          <strong>Diễn viên:</strong> {movie.actors}
        </p>
        <p>
          <strong>Thể loại:</strong> {movie.genre}
        </p>
        <p>
          <strong>Khởi chiếu:</strong> {movie.releaseDate}
        </p>
        <p>
          <strong>Thời lượng:</strong> {movie.duration}
        </p>
        <p>
          <strong>Ngôn ngữ:</strong> {movie.language}
        </p>
        <p className="text-red-600 font-bold">
          <strong>Rated:</strong> {movie.rating}
        </p>
        <p className="mt-4 text-gray-700">{movie.description}</p>
        <div className="mt-4 space-x-2">
          <button className="px-4 py-2 bg-orange-500 text-white rounded">
            Chi tiết
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded">
            Trailer
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded">
            Đánh giá
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
