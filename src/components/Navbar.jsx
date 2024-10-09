import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined/>,
    label: (
      <Link to="/">
        Dashboard
      </Link>
    ),
  },
  {
    key: 'tickets',
    label: (
      <Link to="/tickets">
        Tickets
      </Link>
    ),
  }
];
const Navbar = (props) => {
  return <Menu onClick={props.onClick} selectedKeys={[props.current]} mode="horizontal" items={items} />;
};
export default Navbar;