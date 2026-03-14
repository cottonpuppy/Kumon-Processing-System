import { Card, Input, Button } from "antd";

export default function ReviewPage(){

 return(
  <Card title="公文审核">

   <Input.TextArea rows={10} placeholder="公文内容"/>

   <Button style={{marginTop:10}}>
     AI规范检测
   </Button>

   <Card title="审核意见" style={{marginTop:20}}>
     无明显问题
   </Card>

  </Card>
 )

}