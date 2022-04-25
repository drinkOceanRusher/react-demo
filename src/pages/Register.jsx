import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom';
import loginImg from '../assets/logo.png'
import {RegisterApi} from '../request/api.js'
import '../assets/login.less';

export default function Register() {

const  navigat = useNavigate() 
  const onFinish = (values) => {
    console.log('Success:', values);
    RegisterApi({
      username:values.username,
      password:values.password
    }).then((res)=>{
      if(res.errCode === 0) {
        message.success('注册成功，即将跳转登录页');
       setTimeout(()=>{
         navigat('/login')
       },5000)
      }else{

      }
    })

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
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请输入确认密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('请保持2次输入密码一致'));
            },
          }),
        ]}
      >
        <Input.Password size = "large" prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>
      <Form.Item>
      <Link to="/login">已有账号？立即登录</Link>     
       </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}
