import { Card, Input, Button, Select } from "antd";
import { useState } from "react";
import { generateDoc } from "../services/api";

export default function GeneratePage(){

 const [type,setType]=useState("通知")
 const [topic,setTopic]=useState("")
 const [result,setResult]=useState("")

 const handleGenerate=async()=>{
   const res=await generateDoc({type,topic})
   setResult(res.data)
 }

 return(
  <Card title="公文生成">

    <Select
     defaultValue="通知"
     onChange={setType}
     style={{width:200}}
     options={[
      {value:"通知",label:"通知"},
      {value:"请示",label:"请示"},
      {value:"报告",label:"报告"}
     ]}
    />

    <Input
      placeholder="输入主题"
      style={{marginTop:10}}
      onChange={(e)=>setTopic(e.target.value)}
    />

    <Button
      type="primary"
      style={{marginTop:10}}
      onClick={handleGenerate}
    >
      生成
    </Button>

    <Card title="生成结果" style={{marginTop:20}}>
      {result}
    </Card>

  </Card>
 )

}