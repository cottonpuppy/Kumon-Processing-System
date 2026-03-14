package com.example.pdfeditor.mapper;


import com.example.pdfeditor.entity.Document;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DocumentMapper {

    @Insert("""
        INSERT INTO document
        (title,doc_number,publish_unit,publish_date,content,file_path,status,create_time)
        VALUES
        (#{title},#{docNumber},#{publishUnit},#{publishDate},#{content},#{filePath},#{status},NOW())
    """)
    void insert(Document doc);

    @Select("SELECT * FROM document WHERE id=#{id}")
    Document findById(Long id);

    @Select("SELECT * FROM document ORDER BY create_time DESC")
    List<Document> list();

}