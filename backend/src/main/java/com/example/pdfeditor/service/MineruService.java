package com.example.pdfeditor.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class MineruService {

    private static final String MINERU_URL = "http://localhost:8001/parse";

    public Map parse(String path) {

        RestTemplate restTemplate = new RestTemplate();

        Map<String,String> body = new HashMap<>();

        body.put("path", path);

        Map result = restTemplate.postForObject(
                MINERU_URL,
                body,
                Map.class
        );

        return result;

    }
}