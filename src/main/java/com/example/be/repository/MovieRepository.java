package com.example.be.repository;

import com.example.be.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  MovieRepository  extends JpaRepository<Movie, Long> {
}
