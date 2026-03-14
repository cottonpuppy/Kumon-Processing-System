import { Menu } from "antd";
import {
  FileTextOutlined,
  RobotOutlined,
  EditOutlined,
  DatabaseOutlined,
  AuditOutlined,
  BarChartOutlined,
  SettingOutlined
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      onClick={(e) => navigate(e.key)}
      items={[
        {
          key: "/",
          icon: <FileTextOutlined />,
          label: "公文解析"
        },
        {
          key: "/analyze",
          icon: <RobotOutlined />,
          label: "公文理解"
        },
        {
          key: "/generate",
          icon: <EditOutlined />,
          label: "公文生成"
        },
        {
          key: "/manage",
          icon: <DatabaseOutlined />,
          label: "公文管理"
        },
        {
          key: "/review",
          icon: <AuditOutlined />,
          label: "审核中心"
        },
        {
          key: "/stats",
          icon: <BarChartOutlined />,
          label: "统计分析"
        },
        {
          key: "/admin",
          icon: <SettingOutlined />,
          label: "系统管理"
        }
      ]}
    />
  );
}