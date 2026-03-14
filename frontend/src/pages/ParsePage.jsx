import { Row, Col, Card, Upload, Button, List } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import PdfViewer from "../components/PdfViewer";

export default function ParsePage() {

  const [file, setFile] = useState(null);

  const documents = [
    "公文1.pdf",
    "公文2.pdf",
    "通知2024.pdf"
  ];

  return (
    <Row gutter={16}>

      {/* 左侧 文档区 */}

      <Col span={4}>
        <Card title="文档中心" style={{ height: "80vh" }}>

          <Upload
            beforeUpload={(file) => {
              setFile(file);
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>
              上传PDF
            </Button>
          </Upload>

          <List
            style={{ marginTop: 20 }}
            dataSource={documents}
            renderItem={(item) => (
              <List.Item>{item}</List.Item>
            )}
          />

        </Card>
      </Col>

      {/* 中间 PDF预览 */}

      <Col span={14}>
        <Card title="PDF预览" style={{ height: "80vh", overflow: "auto" }}>

          {file ? (
            <PdfViewer file={file} />
          ) : (
            <div style={{ textAlign: "center", marginTop: 200 }}>
              请上传 PDF
            </div>
          )}

        </Card>
      </Col>

      {/* 右侧 AI解析 */}

      <Col span={6}>
        <Card title="解析结果" style={{ height: "80vh" }}>

          <p><b>标题：</b>关于推进智慧政务建设的通知</p>

          <p><b>文号：</b>政发〔2024〕12号</p>

          <p><b>发文单位：</b>市政府办公厅</p>

          <p><b>时间：</b>2024-05-01</p>

          <p><b>关键词：</b></p>

          <div style={{
            background: "#f5f5f5",
            padding: 10,
            borderRadius: 6
          }}>
            政务、数字化、管理
          </div>

          <p style={{marginTop:15}}><b>摘要：</b></p>

          <div style={{
            background:"#f5f5f5",
            padding:10,
            borderRadius:6
          }}>
            本文件主要说明推进智慧政务平台建设的总体要求和实施步骤。
          </div>

        </Card>
      </Col>

    </Row>
  );
}