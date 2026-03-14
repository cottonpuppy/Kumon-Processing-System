import { Card, Tag } from "antd";

export default function ResultPanel() {

  return (

    <Card title="解析结果" style={{ height: "80vh" }}>

      <p><b>标题</b></p>
      关于推进智慧政务建设的通知

      <p style={{marginTop:10}}><b>文号</b></p>
      政发〔2024〕12号

      <p style={{marginTop:10}}><b>发文单位</b></p>
      市政府办公厅

      <p style={{marginTop:10}}><b>时间</b></p>
      2024-05-01

      <p style={{marginTop:10}}><b>关键词</b></p>

      <Tag color="blue">政务</Tag>
      <Tag color="blue">数字化</Tag>
      <Tag color="blue">管理</Tag>

      <p style={{marginTop:10}}><b>摘要</b></p>

      <div
        style={{
          background:"#f5f5f5",
          padding:10,
          borderRadius:6
        }}
      >
        本文件主要说明推进智慧政务平台建设的总体要求和实施步骤。
      </div>

    </Card>

  );
}