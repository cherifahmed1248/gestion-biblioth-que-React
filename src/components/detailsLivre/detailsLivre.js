import React, { useState } from 'react';
import './detailsLivre.css';
import { Input, Modal, Select, InputNumber } from 'antd';
import { Button, PageHeader } from 'antd';

import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { useRouteMatch, useHistory } from "react-router-dom"
import { getLivreById, updateLivre } from '../../services/livres.service';

import Page403 from "../page403/page403"
function DetailsLivre({ role }) {
    let { params } = useRouteMatch()
    let history = useHistory();

    const livre = getLivreById(params.livreId)

    const [title, setTitle] = useState(livre.title)
    const [auteur, setAuteur] = useState(livre.auteur)
    const [edition, setEdition] = useState(livre.edition)
    const [exemplaire, setExemplaire] = useState(livre.exemplaire)
    const [prix, setPrix] = useState(livre.prix)
    const [archive, setArchive] = useState(livre.archive)
    const [libelle, setLibelle] = useState(livre.libelle)
    const [visible, setVisible] = useState(false)
    const [confirmLoading] = useState(false)

    const { Option } = Select;


    function handleArchive(value) {
        setArchive(value)
        console.log(`selected ` + archive);
    }
    function handlePrix(value) {
        setPrix(value)
    }

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {

        setVisible(false)
        updateLivre({
            id: params.livreId,
            title: title,
            archive: archive,
            prix: prix,
            libelle: libelle,
            auteur: auteur,
            edition: edition,
            exemplaire: exemplaire
        })

    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false)
    };


    return (
        (livre === false ? (<Page403 />) :
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={() => history.goBack()}
                    title="Livre info"
                />
                {(role !== "Adherents" ? (<Button
                    onClick={() => showModal()}
                    type="primary"
                    style={{
                        margin: 16,
                        float: "right"
                    }}
                >
                    Update Livre
                </Button>
                ) : console.log())
                }
                <Modal
                    title="Update Livre"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    headStyle={{ color: "blue" }}

                >
                    <h4>title:</h4>
                    <Input type="text" name='title' placeholder='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></Input><br />
                    <h4>auteur:</h4>
                    <Input type="text" name='auteur' placeholder='auteur'
                        value={auteur}
                        onChange={e => setAuteur(e.target.value)}
                    ></Input><br />
                    <h4>edition:</h4>
                    <Input type="text" name='edition' placeholder='edition'
                        value={edition}
                        onChange={e => setEdition(e.target.value)}
                    ></Input><br />
                    <h4>exemplaire:</h4>
                    <Input type="text" name='exemplaire' placeholder='exemplaire'
                        value={exemplaire}
                        onChange={e => setExemplaire(e.target.value)}
                    ></Input><br />
                    <h4>prix:</h4>
                    <InputNumber name='prix' placeholder='prix' style={{ width: "100%" }}
                        value={prix}
                        onChange={handlePrix}
                    ></InputNumber>
                    <h4>archive:</h4>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="archive Livre"
                        optionFilterProp="children"
                        name='archive'
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }

                        onChange={handleArchive}
                    >
                        <Option value="true">true</Option>
                        <Option value="false">false</Option>
                    </Select>
                    <h4>libelle</h4>
                    <Input.TextArea name='libelle' placeholder='Libelle'
                        value={libelle}
                        onChange={e => setLibelle(e.target.value)}
                    ></Input.TextArea>
                </Modal>

                <Descriptions size="default" bordered>
                    <Descriptions.Item label="Id" >{livre.id}</Descriptions.Item>
                    <Descriptions.Item label="Title" >{title}</Descriptions.Item>
                    <Descriptions.Item label="Prix"  >{prix}</Descriptions.Item>
                    <Descriptions.Item label="exemplaire" >{exemplaire}</Descriptions.Item>
                    <Descriptions.Item label="Auteur" >{auteur}</Descriptions.Item>
                    <Descriptions.Item label="edition" >{edition}</Descriptions.Item>
                    {(role !== "Adherents" ? (
                        <Descriptions.Item label="archive" span={1} >
                            {archive}
                        </Descriptions.Item>
                    ) : console.log())
                    }
                    <Descriptions.Item label="libelle" >{libelle}</Descriptions.Item>
                </Descriptions>

            </>
        )

    )
}

export default DetailsLivre;