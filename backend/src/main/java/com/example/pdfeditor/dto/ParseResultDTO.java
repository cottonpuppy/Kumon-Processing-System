package com.example.pdfeditor.dto;


import lombok.Data;
import java.util.List;

@Data
public class ParseResultDTO {

    private String title;

    private String docNumber;

    private String publishUnit;

    private String publishDate;

    private String content;

    private List<String> keywords;

    private String summary;

}