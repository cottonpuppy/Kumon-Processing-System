package com.example.pdfeditor.entity;


import lombok.Data;
import java.util.Date;

@Data
public class Document {

    private Long id;

    private String title;

    private String docNumber;

    private String publishUnit;

    private Date publishDate;

    private String content;

    private String summary;

    private String keywords;

    private String filePath;

    private String status;

    private Long createUser;

    private Date createTime;

}