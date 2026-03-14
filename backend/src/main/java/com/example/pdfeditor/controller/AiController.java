package com.example.pdfeditor.controller;


import com.example.pdfeditor.dto.AiResultDTO;
import com.example.pdfeditor.service.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @Autowired
    private AiService aiService;

    @PostMapping("/analyze")
    public AiResultDTO analyze(@RequestBody String text){

        return aiService.analyze(text);

    }

}