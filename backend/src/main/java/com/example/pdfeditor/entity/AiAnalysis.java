package com.example.pdfeditor.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class AiAnalysis {

    private Long id;

    private Long docId;

    private String topic;

    private String keywords;

    private String summary;

    private Date createTime;

}