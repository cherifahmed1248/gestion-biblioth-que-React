import React from "react"
import { useState } from 'react';

import 'antd/dist/antd.css';
import './bibliothecaireRouter.css';
import tof from "./ISAMM64.png"


import {
    Switch,
    Route,
    Redirect,
    useRouteMatch,
    Link,
    useLocation
} from "react-router-dom"

import GestionLivre from "../gestionLivre/gestionLivre"
import DetailsLivre from "../detailsLivre/detailsLivre"

import Gestionadhérents from "../Gestionadhérents/Gestionadhérents"
import AdhérentLivres from "../Gestionadhérents/AdhérentLivres/AdhérentLivres"
import Page404 from "../page404/page404"
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";

import {
    ReadOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { getAdherentById } from "../../services/adherents.service";


function BibliothecaireRouter({ logout }) {

    const history = useHistory();

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    let { path } = useRouteMatch()


    const [collapsed, setCollapsed] = useState(false)
    let location = useLocation()


    function toggle() {
        setCollapsed(!collapsed)
    };
    return (


        <Layout>
            {/* ------------------------------------Left Menu --------------------------------------- */}
            <Sider
                collapsible collapsed={collapsed} onCollapse={() => toggle()}
            >



                <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} >
                    <Menu.Item className="logo" style={{
                        marginTop: "15px"
                    }}>
                        <Link to="/home" style={{
                            color: "rgba(255, 255, 255, 0.65)"
                        }} >
                            <img src={tof} alt="ISAMM LIBRARY" style={{ width: "32px" }} />
                            <span style={{
                                padding: "0 15px",
                                color: "#FFF"
                            }}>ISAMM LIBRARY</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/home" icon={<HomeOutlined />}>
                        <Link to="/home" style={{
                            color: "rgba(255, 255, 255, 0.65)"
                        }} >
                            home
        </Link>
                    </Menu.Item>
                    <Menu.Item key="/bibliothecaire/gestionLivre" icon={<ReadOutlined />}>


                        <Link to="/bibliothecaire/gestionLivre" style={{
                            color: "rgba(255, 255, 255, 0.65)"
                        }}>
                            Gestion des Livres

        </Link>
                    </Menu.Item>
                    <Menu.Item key="/bibliothecaire/gestionadhérents" icon={<UserOutlined />}>
                        <Link to="/bibliothecaire/gestionadhérents" style={{
                            color: "rgba(255, 255, 255, 0.65)"
                        }}
                        >

                            Gestion des Adhérents

        </Link>
                    </Menu.Item>


                    <Menu.Item key="/bibliothecaire/gestionlivre/1" icon={<UserOutlined />}  >

                        <Link to="/bibliothecaire/gestionlivre/1" style={{
                            color: "rgba(255, 255, 255, 0.65)"
                        }}> First book</Link>
                    </Menu.Item>


                </Menu>
            </Sider>
            <Layout className="site-layout" >
                {/* ------------------------------------Header Menu --------------------------------------- */}

                <Header className="site-layout-background"  >
                    <Menu theme="light" mode="horizontal" style={{
                        float: "right"
                    }} defaultSelectedKeys={[location.pathname]}
                    >

                        <Menu.Item key="/home" icon={<HomeOutlined />}>
                            <Link to="/home" style={{
                                color: "rgba(0, 0, 0, 0.65)"
                            }} >
                                home
                        </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title={getAdherentById(localStorage.getItem('user')).username}>
                            <Menu.Item key="3" onClick={() => (logout(), history.push("/login"))}>Logout</Menu.Item>

                        </SubMenu>

                    </Menu>


                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: 650 }}>
                    <div classname="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <div classname="bibliothecaire-routes">

                            <Switch>
                                <Route exact path={`${path}/`}>
                                    <Redirect to={`${path}/gestionLivre`} />
                                </Route>
                                <Route exact path={`${path}/gestionLivre`}>
                                    <GestionLivre />
                                </Route>

                                <Route exact path={`${path}/gestionLivre/:livreId`}>

                                    <DetailsLivre />
                                </Route>
                                <Route exact path={`${path}/`}>
                                    <Redirect to={`${path}/gestionLivre`} />
                                </Route>
                                <Route exact path={`${path}/gestionadhérents`}>

                                    <Gestionadhérents />
                                </Route>

                                <Route path={`${path}/gestionadhérents/:id`}>

                                    <AdhérentLivres />
                                </Route>
                                <Route path={`${path}/`}>
                                    <Page404 />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout >
    )

}

export default BibliothecaireRouter