package com.example.pdfeditor.service;


import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    public String review(Long docId,String comment){

        return "审核成功";

    }

}