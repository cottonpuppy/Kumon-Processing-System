package com.example.pdfeditor.service;

import com.example.pdfeditor.dto.AiResultDTO;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class AiService {

    public AiResultDTO analyze(String text) {

        AiResultDTO result = new AiResultDTO();

        result.setTopic("智慧政务建设");

        result.setKeywords(Arrays.asList(
                "政务",
                "数字化",
                "管理"
        ));

        result.setSummary(
                "该公文主要说明推进智慧政务平台建设的总体要求。"
        );

        return result;

    }

}