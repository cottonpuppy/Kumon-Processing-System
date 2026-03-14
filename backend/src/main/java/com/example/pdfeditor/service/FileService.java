package com.example.pdfeditor.service;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileService {

    private static final String UPLOAD_DIR = "uploads/";

    public String save(MultipartFile file) {

        File dir = new File(UPLOAD_DIR);

        if (!dir.exists()) {
            dir.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        File dest = new File(UPLOAD_DIR + fileName);

        try {
            file.transferTo(dest);
        } catch (IOException e) {
            throw new RuntimeException("文件保存失败");
        }

        return dest.getAbsolutePath();
    }
}