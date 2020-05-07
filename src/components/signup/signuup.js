import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import tof from "../img/ISAMM.png"

import {
    Form, Input, Button, Select,
    Card, Col, Row, Tooltip, DatePicker
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
function Signup() {
    const { Option } = Select;
    const [user, setUser] = useState(false)
    const history = useHistory();

    const onFinish = values => {

        console.log('Received values of form: ', values);
        localStorage.setItem('user', values);
        console.log(localStorage.getItem('user'))
        history.push({
            pathname: '/bibliothecaire/gestionLivre',
            state: values.username
        });
    };

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 80,
                }}
            >
                <Option value="216">+216</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
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
                            name="register"
                            className="login-form"
                            {...layout}
                            onFinish={onFinish}
                            initialValues={{
                                prefix: '216',
                            }}
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="username"
                                label={
                                    <span>
                                        Username&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="address"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name="date" label="Date de naissance" {...config}>
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{
                                    marginLeft: "22%",

                                    marginRight: "2%",

                                }}>
                                    Inscription
                                </Button>
                                or
                                <Link to="/login" style={{
                                    marginLeft: "1%",

                                }}>
                                    Se connecter
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

export default Signup;
