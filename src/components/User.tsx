import { Button, Dropdown, Menu, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, logOut } from '../utils/localStorage';
const { Header } = Layout;

const User = (): JSX.Element => {
  const [loggedOut, setLoggedOut] = useState(false);

  const history = useHistory();
  const user = getUser();

  const handleLogOut = () => {
    logOut(['token', 'user']);
    setLoggedOut(!loggedOut);
  };
  const menu = (
    <Menu>
      <Menu.Item>{user}</Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item onClick={handleLogOut}>Logout</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    history.push('/');
  }, [loggedOut]);

  return (
    <Header style={{ textAlign: 'right' }}>
      <span style={{ color: 'white', marginRight: '1rem' }}>Welcome, {user} !</span>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <img className="user-img" src={'https://picsum.photos/id/237/200/300'} />
      </Dropdown>
    </Header>
  );
};

export default User;
