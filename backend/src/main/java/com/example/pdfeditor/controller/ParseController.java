package com.example.pdfeditor.controller;

import com.example.pdfeditor.dto.ParseResultDTO;
import com.example.pdfeditor.service.ParseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/parse")
public class ParseController {

    @Autowired
    private ParseService parseService;

    @PostMapping("/pdf")
    public ParseResultDTO parse(@RequestBody String path){

        return parseService.parse(path);

    }

}