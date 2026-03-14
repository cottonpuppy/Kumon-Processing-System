import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout style={{ height: "100vh" }}>
      
      <Sider width={220} theme="dark">
        <Sidebar />
      </Sider>

      <Layout>

        <Header
          style={{
            background: "#fff",
            borderBottom: "1px solid #eee",
            fontSize: 18,
            fontWeight: 600
          }}
        >
          公文智能分析系统
        </Header>

        <Content
          style={{
            padding: 20,
            background: "#f5f7fa"
          }}
        >
          {children}
        </Content>

      </Layout>

    </Layout>
  );
}