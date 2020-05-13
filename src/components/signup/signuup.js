import React from "react";
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import tof from "../img/ISAMMMax.png"
import { addAdherent } from "../../services/adherents.service"

import {
    Form, Input, Button,
    Card, Col, Row, Tooltip, DatePicker
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
function Signup({ login }) {
    const history = useHistory();

    const add = async (values) => {
        var test = await addAdherent(values)
        localStorage.setItem('user', test.key);
        console.log("localStorage.getItem('user')=" + localStorage.getItem('user'));

    }
    function datess(dates, dateStrings) {
        console.log('From: ', dates);
        console.log('From: ', dateStrings);

        return dateStrings
    }
    const onFinish = values => {
        console.log('values.getDate: ', values.date._i)

        add(values).then(function (value) {
            console.log('value: ', value);
            value === "false" ?
                value = false :
                value = true
            if (value === true) {
                console.log('value: ', value);

                login();
                history.push("/");
            }
        });

    };

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Veillez entrer une date!',
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
                                        message: 'E-mail non valide!',
                                    },
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Mot de passe"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre mot de passe!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirmer Mot de passe"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez confirmer votre mot de passe!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('Les 2 mots de passe que vous avez saisi ne sont pas identiques!');
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
                                        Nom&nbsp;
                                        <Tooltip title="Comment vous voulez être appelé?">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre nom!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Veillez entrer votre address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name="date" label="Date de naissance" {...config}>
                                <DatePicker format="YYYY/MM/DD" onChange={datess} />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Téléphone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Veillez entrer votre numéro!',
                                    },
                                ]}
                            >
                                <Input
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
                                ou
                                <Link to="/login" style={{
                                    marginLeft: "1%",

                                }}>
                                    Connexion
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
