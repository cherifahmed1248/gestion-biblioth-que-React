import React from "react";
import { Link, useHistory } from "react-router-dom";

import 'antd/dist/antd.css';
import tof from "../img/ISAMM.png"

import { Form, Input, Button, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function Login() {
    const history = useHistory();

    const onFinish = values => {
        console.log('Received values of form: ', values);

        if (values.username === 'ahmed' && values.password === '12481248') {
            console.log("Ahmed",
                values.username === 'ahmed' && values.password === '12481248')
            history.push("/home");

        }

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
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{
                                    marginRight: "2%",

                                }}>
                                    Log in
                                </Button>
                                or
                                <Link to="/signup" style={{
                                    marginLeft: "1%",

                                }}>
                                    register now!
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
