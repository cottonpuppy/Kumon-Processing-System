package com.example.pdfeditor.mapper;

import com.example.pdfeditor.entity.ReviewRecord;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

    @Insert("""
        INSERT INTO review_record
        (doc_id,reviewer,comment,result,create_time)
        VALUES
        (#{docId},#{reviewer},#{comment},#{result},NOW())
    """)
    void insert(ReviewRecord record);

}
