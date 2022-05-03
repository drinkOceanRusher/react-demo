import React,{useEffect, useState} from 'react';
import { Menu, Button } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';
import {
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default function() {

    const navigate = useNavigate();
    const location = useLocation();
    const [currentkey,setCurrentkey] = useState();

    const handleclick=(e)=>{
        console.log(e.key)
       navigate('/'+e.key)
       setCurrentkey(e.key);

    }

  useEffect(()=>{
    console.log(location.pathname)
    setCurrentkey(location.pathname.split('/')[1]);

  },[])

  return (
    <div className='asider_box'>
       
        <Menu
          selectedKeys={[currentkey]}
          mode="inline"
          theme="dark"
          onClick={handleclick}
        >
          <Menu.Item key="list" icon={<PieChartOutlined />}>
            查看文章列表
          </Menu.Item>
          <Menu.Item key="edit" icon={<DesktopOutlined />}>
            文章编辑
          </Menu.Item>
          <Menu.Item key="doc" icon={<DesktopOutlined />}>
            修改资料
          </Menu.Item>
        </Menu>
      </div>
  )
}
