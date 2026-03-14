package com.example.pdfeditor.service;

import com.example.pdfeditor.dto.ParseResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ParseService {

    @Autowired
    private MineruService mineruService;

    public ParseResultDTO parse(String path) {

        Map result = mineruService.parse(path);

        ParseResultDTO dto = new ParseResultDTO();

        dto.setTitle((String) result.get("title"));

        dto.setContent((String) result.get("content"));

        dto.setKeywords((List<String>) result.get("keywords"));

        dto.setSummary((String) result.get("summary"));

        return dto;

    }
}