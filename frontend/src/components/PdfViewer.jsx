import { Card } from "antd";
import { Document, Page } from "react-pdf";
import { useState } from "react";

export default function PdfViewer({ file }) {

  const [numPages, setNumPages] = useState(null);

  return (

    <Card
      title="PDF预览"
      style={{ height: "80vh", overflow: "auto" }}
    >

      {file ? (

        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >

          {Array.from(
            new Array(numPages),
            (x, i) => (
              <Page key={i} pageNumber={i + 1} />
            )
          )}

        </Document>

      ) : (

        <div style={{ textAlign: "center", marginTop: 200 }}>
          请上传 PDF 文件
        </div>

      )}

    </Card>

  );
}