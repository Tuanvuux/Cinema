package com.example.be.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "movie")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieId;

    private String name;
    private String director;
    private String actor;
    private String description;
    private int duration; // thời lượng phim (phút)
    private LocalDateTime releaseDate;
    private String caption;
    private String posterUrl;
    private String trailerUrl;
    private LocalDateTime createdAt;
    private String bannerUrl;
    private int ageLimit;
    private boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private Category category;

}
