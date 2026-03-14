package com.example.pdfeditor.service;

import com.example.pdfeditor.entity.Document;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DocumentService {

        public List<Document> list() {

                List<Document> docs = new ArrayList<>();

                Document doc = new Document();

                doc.setId(1L);

                doc.setTitle("关于推进数字政府建设的通知");

                doc.setDocNumber("政发〔2024〕12号");

                doc.setPublishUnit("市政府办公厅");

                docs.add(doc);

                return docs;

        }

}