import { Row, Col } from "antd";
import DocumentList from "../components/DocumentList";
import PdfViewer from "../components/PdfViewer";
import ResultPanel from "../components/ResultPanel";
import { useState } from "react";

export default function EditorPage() {

  const [file, setFile] = useState(null);

  return (

    <Row gutter={16}>

      <Col span={4}>
        <DocumentList setFile={setFile} />
      </Col>

      <Col span={14}>
        <PdfViewer file={file} />
      </Col>

      <Col span={6}>
        <ResultPanel />
      </Col>

    </Row>

  );
}