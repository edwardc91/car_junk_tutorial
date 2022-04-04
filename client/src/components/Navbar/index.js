import React from "react";

import { Menu } from 'antd';

import { useDispatch, useSelector } from 'react-redux'

import * as actions from './actions'

const { SubMenu, Item } = Menu

const Navbar = () => {

  const currentKey = useSelector(state => state.navbar.currentKey)

  const handleOnClick = e => {
      dispatch(({ type: actions.SET_NAV_MENU, payload: { menuKey: e.key } }))
  }

  const dispatch = useDispatch()

  return (
      <Menu 
          theme="dark"
          mode="inline"
          selectedKeys={[currentKey]}
          onClick={handleOnClick}
      >
          <Item key="home">
              <a href="">Home</a>
          </Item>
          <SubMenu key="data" title={<span>Data</span>}>
              <Item key="makes">Makes</Item>
              <Item key="models">Models</Item>
              <Item key="sizes">Sizes</Item>
              <Item key="body">Body Types</Item>
          </SubMenu>
          <Item key="about">
              <a href="">About Us</a>
          </Item>
          <Item key="mail">
            <a href="">Signin</a>
          </Item>
          <Item key="app">
            <a href="">Signup</a>
          </Item>
      </Menu>
  )
}

export default Navbar;