import { Button, Dropdown, Menu } from 'antd';
import React from 'react';

const User = (): JSX.Element => {
  const menu = (
    <Menu>
      <Menu.Item>
        
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>bottomLeft</Button>
      </Dropdown>
    </div>
  );
};

export default User;
