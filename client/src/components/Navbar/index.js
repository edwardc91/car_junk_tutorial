import React from "react";
import {  Menu  } from 'antd';

const { SubMenu, Item } = Menu;


const Navbar = () => {

  return (
    <Menu 
        theme="dark" 
        mode="horizontal" 
        selectedKeys={['makes']}
      >
        <SubMenu key="data" title="Data Managment">
          <Item key="makes">Makes</Item>
          <Item key="models">Models</Item>
          <Item key="sizes">Sizes</Item>
          <Item key="body">Body Types</Item>
        </SubMenu>
        <Item key="about">Acerca de</Item>
    </Menu>
  );
};

export default Navbar;