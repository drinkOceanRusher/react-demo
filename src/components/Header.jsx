import React, { useEffect, useState } from 'react';
import LoginImg from '../assets/logo.png';
import { Menu, Dropdown, Space, message } from 'antd';
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import deafaultAvatar from '../assets/defaultAvatar.png';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(deafaultAvatar);
    const [username, setUsername] = useState("访客");
    useEffect(() => {
        let curUsername = localStorage.getItem('username');
        let curAvatar = localStorage.getItem('avatar');
        if (curUsername) {
            setUsername(curUsername);
        }
        if (curAvatar) {
            setAvatar('http://47.93.114.103:6688/' + curAvatar);
        }
    }, [])

    const logout = () => {
        localStorage.clear();
        message.success('正在退出，正在跳转登录页');
        setTimeout(() => navigate('/login'), 1500);
    }
    const menu = (
        <Menu>
            <Menu.Item>
                修改资料
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={logout}>
                退出登录
            </Menu.Item>
        </Menu>

    );
    return (
        <header>
            <img src={LoginImg} />
            <div className='right'>
                <Dropdown overlay={menu}>
                    <a className='mydropdown' onClick={e => e.preventDefault()}>
                        <Space>
                            <img className='avatar' src={avatar} alt="" />
                            <span>
                                {username}
                            </span>
                            <CaretDownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>

        </header>
    )
}
