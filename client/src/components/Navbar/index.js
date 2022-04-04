import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import {  Menu  } from 'antd';

import * as actions from './actions'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;



const Navbar = () => {
  const currentKey = useSelector(state => state.navbar.currentKey)

  const handleOnClick = e => {
    dispatch(({ type: actions.SET_NAV_MENU, payload: { menuKey: e.key } }))
  }

  const dispatch = useDispatch()

  return (
    <Menu 
        theme="dark" 
        mode="horizontal" 
        selectedKeys={[currentKey]}
        onClick={handleOnClick}
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