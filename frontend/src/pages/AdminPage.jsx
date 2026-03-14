import { Card, Table } from "antd";

export default function AdminPage(){

 const columns=[
  {title:"用户名",dataIndex:"username"},
  {title:"角色",dataIndex:"role"},
 ]

 const data=[
  {username:"admin",role:"管理员"},
  {username:"reviewer",role:"审核员"}
 ]

 return(
  <Card title="用户管理">
    <Table columns={columns} dataSource={data}/>
  </Card>
 )

}