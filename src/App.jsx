import React from 'react'
import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header  from './components/Header.jsx';
export default function App() {

  const {  Content, Sider } = Layout;

  return (
<Layout id='app'>
      <Header/>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <footer>Respect | Copyright &copy; 2022 Author 你单排吧</footer>
    </Layout>
  )
}
