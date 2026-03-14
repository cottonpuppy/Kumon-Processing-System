package com.example.pdfeditor.entity;

import lombok.Data;

import java.util.List;

@Data
public class Role {

    private int pageNumber;

    private List<User> blocks;

}
