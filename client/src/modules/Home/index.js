import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Layout } from 'antd'

import Navbar from "../../components/Navbar";
import CenterSpin from '../../components/CenterSpin';
import ElementManagment from '../ElementManagment';

const { Header, Content, Sider } = Layout;

const Home = () => {

  const currentNavMenu = useSelector(state => state.navbar.currentKey)

  return (
    <>
      <Layout>
        <Header>
          <div>Logo</div>
        </Header>
        <Layout>
          <Sider>
            <Navbar />
          </Sider>
          <Layout>
            <Content style={{ margin: "2%"}}>
              <ElementManagment/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;