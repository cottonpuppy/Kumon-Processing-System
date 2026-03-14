package com.example.pdfeditor.mapper;

import com.example.pdfeditor.entity.AiAnalysis;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AiAnalysisMapper {

    @Insert("""
        INSERT INTO ai_analysis
        (doc_id,topic,keywords,summary,create_time)
        VALUES
        (#{docId},#{topic},#{keywords},#{summary},NOW())
    """)
    void insert(AiAnalysis ai);

}
