import React from "react";
import { Link, useHistory } from "react-router-dom";

import 'antd/dist/antd.css';
import tof from "../img/ISAMMMax.png"

import { message, Form, Input, Button, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { seConnecter } from "../../services/adherents.service"


function Login({ logintest }) {

    const history = useHistory();
    const log = async (values) => {
        var test = await seConnecter(values)
        console.log('test: ', test);
        localStorage.setItem('user', test);
        console.log("localStorage.setItem('user', test): ", localStorage.getItem('user'));

        console.log('test: ', test);
        return test
    }


    const onFinish = values => {

        log(values).then(function (value) {

            if (value === "false") {
                value = false
            }

            if (value === false) {
                message.error("nom ou mot de passe inccorect, veillez réessayer")
                history.push("/");
            }
            if (value !== "false" && value !== false) {
                logintest();
                history.push("/");
            }

        });

    };

    return (
        <>

            <Row gutter={16}>
                <Col span={6}></Col>
                <Col span={12}>
                    <Card style={{
                        //width: 600,
                        marginTop: "5%"
                    }}
                    >
                        <img src={tof} alt="Logo" style={{
                            width: "50%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                            marginBottom: "5%"
                        }} />

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre email!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre mot de passe!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Mot de passe"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{
                                    marginRight: "2%",

                                }}>
                                    Connexion
                                </Button>
                                ou
                                <Link to="/signup" style={{
                                    marginLeft: "1%",

                                }}>
                                    Inscrivez-vous!
                                </Link>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
                <Col span={6}></Col>
            </Row>
        </>
    );
}

export default Login;
