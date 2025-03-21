import { useState } from "react";

const schedule = {
  "2024-03-17": [
    {
      title: "(LỒNG TIẾNG) SÁT THỦ VÔ CÙNG CỰC HÀI (T16)",
      poster:
        "https://metiz.vn/media/poster_film/satthuvocungcuchaiLTPoster.jpg", // Thay bằng link ảnh thực tế
      showtimes: [
        { time: "09:30-11:17", room: "05" },
        { time: "14:10-15:57", room: "04" },
        { time: "19:20-21:07", room: "02" },
        { time: "22:10-23:57", room: "04" },
      ],
    },
    {
      title: "(PHỤ ĐỀ) SÁT THỦ VÔ CÙNG CỰC HÀI (T16)",
      poster: "https://metiz.vn/media/poster_film/hitman_2_.jpg", // Thay bằng link ảnh thực tế
      showtimes: [
        { time: "13:10-14:57", room: "03" },
        { time: "17:10-18:57", room: "01" },
      ],
    },
  ],
};

const getWeekday = (dateStr) => {
  const days = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  return days[new Date(dateStr).getDay()];
};

const Showtime = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState("2024-03-17");

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split("T")[0]; // Format YYYY-MM-DD
  });

  return (
    <div className="p-6">
      <h2 className="text-orange-500 text-2xl font-bold mb-4">Lịch chiếu</h2>

      {/* Chọn ngày */}
      <div className="bg-orange-50 border-t-2 border-orange-500 p-4 rounded-lg">
        <h3 className="text-lg text-black font-semibold mb-2">
          Chọn ngày chiếu
        </h3>
        <div className="flex space-x-4">
          {dates.map((date) => (
            <button
              key={date}
              className={`p-2 rounded-full w-10 h-10 text-white font-bold ${
                selectedDate === date ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {parseInt(date.split("-")[2])}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách phim */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Chọn lịch chiếu</h3>
        {schedule[selectedDate]?.length > 0 ? (
          schedule[selectedDate].map((movie, index) => (
            <div key={index} className="mt-4 flex space-x-4">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-24 h-36 object-cover rounded"
              />
              <div>
                <h4 className="font-bold">{movie.title}</h4>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {movie.showtimes.map((show, idx) => (
                    <div key={idx} className="border p-2 text-center rounded">
                      <p className="font-semibold">{show.time}</p>
                      <p className="text-sm text-gray-500">
                        Phòng chiếu {show.room}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-2">
            Ngày bạn chọn hiện không có lịch chiếu nào. Vui lòng chọn ngày khác.
          </p>
        )}
      </div>
    </div>
  );
};

export default Showtime;
