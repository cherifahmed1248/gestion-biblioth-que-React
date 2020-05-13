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
                message.success("données modifiées avec succès!")
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
                message.success("Mot de passe modifier avec succès!")
            }
            if (value === false) {
                message.error("Mot de passe incorrect ! Veillez réessayer ")
            }
        })

    }

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Veillez choisir une date!',
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
                <Panel header="Paramètres généraux" key="1">
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
                                    message: 'E-mail non valide !',
                                },
                                {
                                    required: true,
                                    message: 'Veillez entrer votre E-mail!',
                                },
                            ]}
                        >
                            <Input defaultValue={adherent.email} />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label={
                                <span>
                                    Nom&nbsp;

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
                            <Input defaultValue={adherent.username} />
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
                            label="Téléphone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Veillez entrer votre numéro!',
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
                                Modifier
                                </Button>

                        </Form.Item>
                    </Form>

                </Panel>
                <Panel header="Paramètre du sécurité" key="2">
                    <Form name="Password"
                        className="Password-form"
                        {...layout}
                        onFinish={passwordchange}
                    >

                        <Form.Item

                            name="oldPassword"
                            label="Mot de passe actuel"
                            rules={[
                                {
                                    required: true,
                                    message: 'Veillez entrer votre mot de passe actuel!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item

                            name="password"
                            label="Nouveau mot de passe"
                            rules={[
                                {
                                    required: true,
                                    message: 'Veillez entrer un mot de passe!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label="Confirmer mot de passe"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Veillez confirmer le mot de passe!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject('Les 2 mots de passes que vous avez entré ne sont pas identiques!');
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
                                Enregistrer les modifications
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
