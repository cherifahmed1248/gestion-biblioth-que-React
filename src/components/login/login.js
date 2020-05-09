import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import 'antd/dist/antd.css';
import tof from "../img/ISAMM.png"

import { Form, Input, Button, Card, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { seConnecter } from "../../services/adherents.service"


function Login({ logintest }) {

    const history = useHistory();
    const log = async (values) => {
        var test = await seConnecter(values)
        console.log('test: ', test);
        localStorage.setItem('user', test);
        console.log("localStorage.setItem('user', test): ", localStorage.getItem('user'));

        return test
    }


    const onFinish = values => {

        log(values).then(function (value) {
            console.log('value: ', value);
            value === "false" ?
                value = false :
                value = true
            if (value == true) {
                console.log('value: ', value);

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
                                        message: 'Please input your email!',
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
