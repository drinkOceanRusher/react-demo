import React from 'react'
import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header  from './components/Header.jsx';
import Asider from './components/Asider.jsx';
import Bread from './pages/Bread.jsx';
export default function App() {

  const {  Content } = Layout;

  return (
<Layout id='app'>
      <Header/>
      <div className='container'>
        <Asider/>
        <div className="container_content">
          <Bread/>
            <Outlet />
          </div>
      </div>
      <footer>Respect | Copyright &copy; 2022 Author 你单排吧</footer>
    </Layout>
  )
}
