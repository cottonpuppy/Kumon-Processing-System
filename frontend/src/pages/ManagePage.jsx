import { Table, Card } from "antd";
import { useEffect, useState } from "react";
import { getDocuments } from "../services/api";

export default function ManagePage(){

 const [data,setData]=useState([])

 useEffect(()=>{
   getDocuments().then(res=>{
     setData(res.data)
   })
 },[])

 const columns=[
  {title:"标题",dataIndex:"title"},
  {title:"文号",dataIndex:"docNumber"},
  {title:"发文单位",dataIndex:"publishUnit"},
  {title:"时间",dataIndex:"publishDate"},
 ]

 return(
  <Card title="公文管理">
   <Table columns={columns} dataSource={data}/>
  </Card>
 )

}