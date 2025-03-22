package com.example.be.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

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
    private int duration;
    private LocalDateTime releaseDate;
    private String caption;
    private String posterUrl;
    private String trailerUrl;
    @CreationTimestamp
    private LocalDateTime createdAt;
    private String bannerUrl;
    private int ageLimit;
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private Category category;

}
