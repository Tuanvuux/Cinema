package com.example.be.service;

import com.example.be.entity.Movie;
import com.example.be.entity.Room;
import com.example.be.entity.ShowTime;
import com.example.be.repository.MovieRepository;
import com.example.be.repository.RoomRepository;
import com.example.be.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowTimeService {
    @Autowired
    private ShowTimeRepository showTimeRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private RoomRepository roomRepository;

    public ShowTime addShowtime(ShowTime showtime){
        return showTimeRepository.save(showtime);
    }


    public ShowTime getShowtimeId(Long id){
        return showTimeRepository.findById(id).orElseThrow(() -> new RuntimeException("Showtime not found"));
    }

    public ShowTime updateShowtime(Long id, ShowTime showtimeDetails) {
        ShowTime existingShowtime = getShowtimeId(id);

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

        return showTimeRepository.save(existingShowtime);
    }

    public String deletedShowtime(Long id){
        showTimeRepository.deleteById(id);
        return "Showtime deleted successfully!";
    }

    public ShowTime saveShowtime(ShowTime showtime){
        return showTimeRepository.save(showtime);
    }
}
