package com.example.pdfeditor.util;

import java.io.File;
import java.util.UUID;

public class FileUtil {

    public static String generateFileName() {

        return UUID.randomUUID().toString() + ".pdf";

    }

    public static File getPdfFile(String path) {

        return new File(path);

    }

}