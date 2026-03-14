package com.example.pdfeditor.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class ReviewRecord {

    private Long id;

    private Long docId;

    private Long reviewer;

    private String comment;

    private String result;

    private Date createTime;

}