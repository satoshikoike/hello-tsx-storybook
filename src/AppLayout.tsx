import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Switch, Route, Link } from 'react-router-dom';
// import { Logo } from './Logo';
import logo from './assets/logo.svg';
import { Trigger } from './Trigger';
// import Counter from './pages/Counter/Counter';
// import { Counter } from './pages/Counter2/Counter';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Users } from './pages/Users';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth={64}
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
          className="site-layout-background"
          trigger={null}
          collapsed={collapsed}
        >
          {/* <Logo /> */}
          <div
            style={{ height: '52px', marginTop: 'auto', marginBottom: 'auto' }}
          >
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <Menu.Item key="13" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="14" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="15" icon={<TeamOutlined />}>
              <Link to="users">Users</Link>
            </Menu.Item>
          </Menu>
          <div
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              padding: '10px',
              borderTop: '1px solid #dedede',
            }}
          >
            <Trigger
              collapsed={collapsed}
              toggle={() => setCollapsed(!collapsed)}
            />
          </div>
        </Sider>
        <Layout>
          <Header>
            <div style={{ display: 'flex' }}>
              {/* <div
                style={{
                  display: 'block',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
              >
                <Trigger
                  collapsed={collapsed}
                  toggle={() => setCollapsed(!collapsed)}
                />
              </div> */}
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ marginLeft: '24px' }}
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="users">Users</Link>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
          <Layout style={{ padding: '0 24px 0' }}>
            {/* <Layout style={{ padding: '12px' }}> */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
              }}
            >
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
