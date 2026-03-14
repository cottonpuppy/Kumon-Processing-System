package com.example.pdfeditor.dto;

import lombok.Data;
import java.util.List;

@Data
public class AiResultDTO {

    private String topic;

    private List<String> keywords;

    private String summary;

}