import { Button, Dropdown, Menu, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../app/slices/Auth';
import { getUser, logOut } from '../utils/localStorage';
const { Header } = Layout;

const User = (): JSX.Element => {
  const history = useHistory();
  const user = getUser();

  const handleLogOut = () => {
    logout(0);
    history.push('/login');
  };
  const menu = (
    <Menu theme="light">
      <Menu.Item>{user}</Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item onClick={handleLogOut}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="user_header">
      <span style={{ color: 'black', marginRight: '1rem' }}>Welcome, {user} !</span>
      <Dropdown trigger={['click']} overlay={menu} placement="bottomLeft">
        <span className="avatar_parent">
          <img className="user-img" src={'https://picsum.photos/id/237/200/300'} style={{ cursor: 'pointer' }} />
        </span>
      </Dropdown>
    </Header>
  );
};

export default User;
