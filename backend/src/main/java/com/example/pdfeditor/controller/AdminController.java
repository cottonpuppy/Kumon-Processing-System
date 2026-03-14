package com.example.pdfeditor.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/users")
    public String users(){

        return "用户列表";

    }

}