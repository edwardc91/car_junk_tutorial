import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Layout } from 'antd'

import Navbar from "../../components/Navbar";
import CenterSpin from '../../components/CenterSpin';

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
              {currentNavMenu === "makes" ?
                "Makes"
                : currentNavMenu === "models" ?
                  "Models"
                  : currentNavMenu === "sizes" ?
                    "Sizes"
                    : currentNavMenu === "bodys" ?
                      "Bodys"
                      : currentNavMenu === "about" ?
                        "About"
                        :
                        <CenterSpin/>
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;