package com.example.be.controller;


import com.example.be.entity.Category;
import com.example.be.entity.Movie;
import com.example.be.entity.Room;
import com.example.be.entity.Showtime;
import com.example.be.service.MovieService;
import com.example.be.service.RoomService;
import com.example.be.service.ShowtimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/showtime")
@CrossOrigin(origins = "http://localhost:5173")
public class ShowtimeController {
    @Autowired
    private ShowtimeService showtimeservice;

    @Autowired
    private MovieService movieservice;

    @Autowired
    private RoomService roomservice;

    @PostMapping
    public ResponseEntity<?> addShowtime(@RequestBody Showtime showtimeData) {
        try {
            Optional<Movie> movieOpt = movieservice.getMovieById(showtimeData.getMovie().getMovieId());
            if (movieOpt.isEmpty()) {
                return ResponseEntity.badRequest().body("Invalid Movie ID!");
            }
            showtimeData.setMovie(movieOpt.get());

            Optional<Room> roomOpt = Optional.ofNullable(roomservice.getRoomById(showtimeData.getRoom().getId()));
            if (roomOpt.isEmpty()) {
                return ResponseEntity.badRequest().body("Invalid Room ID!");
            }
            showtimeData.setRoom(roomOpt.get());

            Showtime savedShowtime = showtimeservice.saveShowtime(showtimeData);
            return ResponseEntity.status(201).body(savedShowtime);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @GetMapping
    public List<Showtime> getShowtime() {
        return showtimeservice.getAllShowtimes();
    }

    @GetMapping("/{id}")
    public Showtime getShowtimeById(@PathVariable Long id) {
        return showtimeservice.getShowtimeId(id);
    }

    @PutMapping("/{id}")
    public Showtime updateShowtime(@PathVariable Long id, @RequestBody Showtime showtime) {
        return showtimeservice.updateShowtime(id, showtime);
    }

    @DeleteMapping("/{id}")
    public String deleteShowtime(@PathVariable Long id) {
        return showtimeservice.deletedShowtime(id);
    }
}
