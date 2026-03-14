package com.example.pdfeditor.controller;

import com.example.pdfeditor.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/file")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public String upload(@RequestParam MultipartFile file){

        return fileService.save(file);

    }

}