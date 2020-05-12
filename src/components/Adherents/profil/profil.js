import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useRouteMatch } from "react-router-dom"
import { getAdherentById, updateAdherent, updatePassword } from '../../../services/adherents.service';
import moment from 'moment';
import { Collapse } from 'antd';



import {
    message, Form, Input, Button, DatePicker
} from 'antd';
function Profil() {
    const { Panel } = Collapse;

    let { params } = useRouteMatch()
    const [adherent, setAdherent] = useState(getAdherentById(params.Id))


    const update = async (values) => {
        values.key = params.Id
        console.log('values: ', values);
        return await updateAdherent(values)
    }
    const onFinish = values => {
        console.log('values.getDate: ', values)
        update(values).then(function (value) {
            console.log('value: ', value);


            if (value !== false) {
                message.success("Your settings have been updated!")
                setAdherent(value)
            }

        });

    };
    const updatePass = async (values) => {
        values.key = params.Id
        console.log('values: ', values);
        return await updatePassword(values)

    }
    const passwordchange = val => {
        updatePass(val).then(function (value) {
            console.log('value: ', value);
            if (value !== false) {
                message.success("Your password have been updated!")
            }
            if (value === false) {
                message.error("wrong password. please try again")
            }
        })

    }

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
    return (
        <>
            {console.log('adherent: ', adherent)}
            <Collapse  >
                <Panel header="Basic Settings" key="1">
                    <Form
                        name="register"
                        className="login-form"
                        {...layout}
                        onFinish={onFinish}

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
                            <Input defaultValue={adherent.email} />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label={
                                <span>
                                    Username&nbsp;

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
                            <Input defaultValue={adherent.username} />
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
                            <Input defaultValue={adherent.adresse} />
                        </Form.Item>
                        <Form.Item name="date" label="Date de naissance" {...config}>
                            <DatePicker format="YYYY/MM/DD" defaultValue={moment(adherent.date)}
                                style={{
                                    width: '100%',
                                }} />
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
                            <Input defaultValue={adherent.tel}
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
                                Update Information
                                </Button>

                        </Form.Item>
                    </Form>

                </Panel>
                <Panel header="Security Settings" key="2">
                    <Form name="Password"
                        className="Password-form"
                        {...layout}
                        onFinish={passwordchange}
                    >

                        <Form.Item

                            name="oldPassword"
                            label="Current Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Current password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item

                            name="password"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your new password!',
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{
                                marginLeft: "22%",

                                marginRight: "2%",

                            }}>
                                Save Changes
                                </Button>

                        </Form.Item>
                    </Form>
                </Panel>

            </Collapse>
            {/*  <p>HELLO {adherent.username} {params.Id}</p>
 */}
        </>
    )
}
export default Profil;
