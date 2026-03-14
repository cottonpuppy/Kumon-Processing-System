import { Card, Input, Button } from "antd";
import { useState } from "react";
import { analyzeDoc } from "../services/api";

export default function AnalyzePage() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    const res = await analyzeDoc(text);
    setResult(res.data);
  };

  return (
    <Card title="公文理解">
      <Input.TextArea rows={8} onChange={(e)=>setText(e.target.value)} />

      <Button onClick={handleAnalyze} style={{marginTop:10}}>
        分析
      </Button>

      <Card title="AI结果" style={{marginTop:20}}>
        {result}
      </Card>
    </Card>
  );
}