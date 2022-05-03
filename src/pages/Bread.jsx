import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Bread() {

    const [currentBread,setBread] = useState();
    const location = useLocation();
    
    useEffect(()=>{
        console.log(location.pathname)
        if(location.pathname===('/edit')){
        setBread('文章编辑');
        }else if(location.pathname===('/doc')){
        setBread('资料');
        }else if(location.pathname===('/list')){
            setBread('查看文章列表');
        }
    },[location.pathname]);
  return (
    <Breadcrumb>
    <Breadcrumb.Item href="/list">
      <HomeOutlined />
    </Breadcrumb.Item>

    <Breadcrumb.Item >
      <span>{currentBread}</span>
    </Breadcrumb.Item>

  </Breadcrumb>  )
}
