import React from "react"
import { useState } from 'react';

import 'antd/dist/antd.css';
import tof from "../../img/ISAMM.png"


import {
    Link,
    useLocation
} from "react-router-dom"

import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";

import {
    ReadOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { getAdherentById } from "../../../services/adherents.service";

function AppMenu({ logout, children }) {

    const history = useHistory();

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;


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



                {!(getAdherentById(localStorage.getItem('user')).biblo === "false" || getAdherentById(localStorage.getItem('user')).biblo === false)
                    ?


                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} >

                        <Menu.Item classname="logo" style={{
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
                        <SubMenu key="Gestion Emprunts" title="Gestion Emprunts">

                            <Menu.Item key="/bibliothecaire/gestionempruntsencours" icon={<ReadOutlined />}  >

                                <Link to="/bibliothecaire/gestionempruntsencours" style={{
                                    color: "rgba(255, 255, 255, 0.65)"
                                }}>gestionempruntsencours </Link>
                            </Menu.Item>
                            <Menu.Item key="/bibliothecaire/historiqueEmprunts" icon={<ReadOutlined />}  >

                                <Link to="/bibliothecaire/historiqueEmprunts" style={{
                                    color: "rgba(255, 255, 255, 0.65)"
                                }}>historique Emprunts </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>

                    :

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} >

                        <Menu.Item classname="logo" style={{
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
                        <Menu.Item key="/Adherents/listeLivre" icon={<ReadOutlined />}  >

                            <Link to="/Adherents/listeLivre" style={{
                                color: "rgba(255, 255, 255, 0.65)"
                            }}> List of books </Link>
                        </Menu.Item>
                        <SubMenu key="Liste Emprunts" title="Liste Emprunts">
                            <Menu.Item key="/Adherents/listeLivreEmprunt" icon={<ReadOutlined />}  >

                                <Link to="/Adherents/listeLivreEmprunt" style={{
                                    color: "rgba(255, 255, 255, 0.65)"
                                }}>  encours </Link>
                            </Menu.Item>
                            <Menu.Item key="/Adherents/historiqueEmprunt" icon={<ReadOutlined />}  >

                                <Link to="/Adherents/historiqueEmprunt" style={{
                                    color: "rgba(255, 255, 255, 0.65)"
                                }}> historique  </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                }


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
                            <Menu.Item key="profil" >

                                <Link to={"/Adherents/profil/" + localStorage.getItem('user')} >Profil
                                </Link>

                            </Menu.Item>

                            <Menu.Item key="3" onClick={() => (logout(), history.push("/login"))}>Logout</Menu.Item>

                        </SubMenu>

                    </Menu>


                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: 650 }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <div className="routes">
                            {children}

                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout >
    )
}

export default AppMenu