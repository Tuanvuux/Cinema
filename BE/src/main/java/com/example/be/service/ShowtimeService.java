package com.example.be.service;

import com.example.be.entity.Movie;
import com.example.be.entity.Room;
import com.example.be.entity.Showtime;
import com.example.be.repository.MovieRepository;
import com.example.be.repository.RoomRepository;
import com.example.be.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeService {
    @Autowired
    private ShowtimeRepository showtimeRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Showtime addShowtime(Showtime showtime){
        return showtimeRepository.save(showtime);
    }

    public List<Showtime> getAllShowtimes(){
        return showtimeRepository.findAll();
    }

    public Showtime getShowtimeId(Long id){
        return showtimeRepository.findById(id).orElseThrow(() -> new RuntimeException("Showtime not found"));
    }

    public Showtime updateShowtime(Long id, Showtime showtimeDetails) {
        Showtime existingShowtime = getShowtimeId(id);

        // Lấy movie từ database dựa theo ID
        Movie movie = movieRepository.findById(showtimeDetails.getMovie().getMovieId())
                .orElseThrow(() -> new RuntimeException("Movie not found"));
        existingShowtime.setMovie(movie);

        // Lấy room từ database dựa theo ID
        Room room = roomRepository.findById(showtimeDetails.getRoom().getId())
                .orElseThrow(() -> new RuntimeException("Room not found"));
        existingShowtime.setRoom(room);
        existingShowtime.setShowDate(showtimeDetails.getShowDate());
        existingShowtime.setStartTime(showtimeDetails.getStartTime());
        existingShowtime.setEndTime(showtimeDetails.getEndTime());

        return showtimeRepository.save(existingShowtime);
    }

    public String deletedShowtime(Long id){
        showtimeRepository.deleteById(id);
        return "Showtime deleted successfully!";
    }

    public Showtime saveShowtime(Showtime showtime){
        return showtimeRepository.save(showtime);
    }
}
