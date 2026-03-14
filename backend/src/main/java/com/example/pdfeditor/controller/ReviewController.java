package com.example.pdfeditor.controller;

import com.example.pdfeditor.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/submit")
    public String review(
            @RequestParam Long docId,
            @RequestParam String comment){

        return reviewService.review(docId,comment);

    }

}