import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import loginImg from '../assets/logo.png'

import '../assets/login.less';

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <div className='login_box'> 
      <img src={loginImg}></img>
      <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"

    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input size = "large" prefix={<UserOutlined className="site-form-item-icon" />}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password size = "large" prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>
      <Form.Item>
      <Link to="/register">还没账号？立即注册</Link>     
       </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}
