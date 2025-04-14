package com.example.be.controller;
import com.example.be.dto.response.ShowTimeResponse;
import com.example.be.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/showtime")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;
    @GetMapping("")
    public ResponseEntity<List<ShowTimeResponse>> getAllShowTime() {
        return ResponseEntity.ok(showTimeService.findAllShowTime());
    }
}
