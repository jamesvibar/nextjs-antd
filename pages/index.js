import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(state => !state)}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Icon type="pie-chart" />
            <span>Item 1</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="desktop" />
            <span>Item 2</span>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="team" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item>
              <span>Login</span>
            </Menu.Item>
            <Menu.Item>
              <span>Logout</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout>
        <Content
          style={{
            margin: "16px"
          }}
        >
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      <style jsx>
        {`
          .logo {
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
          }
        `}
      </style>
    </Layout>
  );
}
