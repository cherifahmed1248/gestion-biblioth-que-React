import React, { useState, useRef, useEffect } from 'react';
import './gestionLivre.css';

import 'antd/dist/antd.css';
import { Table, Tag, Popconfirm, Button } from 'antd';
import { loremIpsum, fullname, username } from 'react-lorem-ipsum';
import { getLivres, addLivre, archiveLivre, deleteLivre } from "../../services/livres.service"
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Input, Space, Modal, Select, InputNumber } from 'antd';
import { NavLink, useRouteMatch, useHistory } from "react-router-dom"
import { PageHeader } from 'antd';

export default function GestionLivre() {
    useEffect(() => {
        init()
    })
    const [livres, setLivres] = useState([])
    const [count, setCount] = useState()
    const [searchText, setSearchText] = useState("")
    const [searchedColumn, setSearchedColumn] = useState("")
    const searchInput = useRef(null)
    const [visible, setVisible] = useState(false)
    const [confirmLoading] = useState(false)

    const [title, setTitle] = useState()
    const [auteur, setAuteur] = useState()
    const [edition, setEdition] = useState()
    const [exemplaire, setExemplaire] = useState()
    const [prix, setPrix] = useState()
    const [archive, setArchive] = useState()
    const [libelle, setLibelle] = useState()
    let { path } = useRouteMatch()
    let history = useHistory();
    const { Option } = Select;

    const init = async () => {
        const result = await getLivres()
        setLivres(result)
        console.log(typeof (count))
        if (count === undefined) {
            setCount(result.length + 1)
        }
    }


    /*--------------------- ajouterLivre ----------------------*/
    const Livre = {
        id: count,
        title: username(),
        archive: Math.floor(Math.random() * 2) === 1 ? "true" : "false",
        prix: Math.floor(Math.random() * 101),
        libelle: loremIpsum({
            p: 1,
            avgWordsPerSentence: 1,
            avgSentencesPerParagraph: 8
        }),
        auteur: fullname(),
        edition: Math.floor(Math.random() * 10) + " EDITION",
        exemplaire: Math.floor(Math.random() * 1000)
    }

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
        ajouterLivre({
            id: count,
            title: title,
            archive: archive,
            prix: prix,
            libelle: libelle,
            auteur: auteur,
            edition: edition,
            exemplaire: exemplaire
        })
        setTitle()
        setAuteur()
        setEdition()
        setExemplaire()
        setLibelle()
        setPrix()
        setArchive()
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false)
    };





    function ajouterLivre(Livre) {
        console.log("count=" + count)
        let newLiv = addLivre(Livre)
        setCount(count + 1)
        setLivres(newLiv)
    }


    /*--------------------- search ----------------------*/
    const getColumnSearchProps = dataIndex => ({

        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}

                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
            </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
            </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                // setTimeout(() => searchInput.select());
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                    text
                ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();

        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)

    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')

    };

    const columns = [
        {
            title: 'Ref',
            dataIndex: 'id',
            defaultSortOrder: 'descend',
            sorter: {
                compare: (a, b) => a.id - b.id,
                multiple: 85,
            },
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: {
                compare: (a, b) => a.title.toLowerCase() !== b.title.toLowerCase() ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 : 0,
                multiple: 4,
            },
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('title'),
        },

        {
            title: 'Archive',
            dataIndex: 'archive',
            key: 'archive',
            filters: [
                {
                    text: 'True',
                    value: 'true',
                },
                {
                    text: 'False',
                    value: 'false',
                },


            ],
            onFilter: (value, record) => record.archive.indexOf(value) === 0,
            sorter: {
                compare: (a, b) => a.exemplaire - b.exemplaire,
                multiple: 94,
            },
            sortDirections: ['descend', 'ascend'],

            render: archive => (

                <span>
                    <Tag color={archive === "true" ? '#87d068' : '#f50'} key={archive}>
                        {String(archive)}
                    </Tag>

                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span style={{ textAlign: "center" }}>
                    <NavLink to={`${path}/${record.id}`} activeClassName="active">
                        Details
                    </NavLink>
                    <br />

                    <Popconfirm title="Sure to archive?" okText='Yes'
                        okType='danger'
                        cancelText='No' onConfirm={() => archiveLivreById(record.id)}>
                        <a>Archive</a><br />
                    </Popconfirm>
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
                </span>

            ),
        },
    ];



    /*--------------------- Delete Livre ----------------------*/

    function handleDelete(id) {
        console.log(id)
        let Supp = livres.filter(l => l.id !== id)
        deleteLivre(id)
        setLivres(Supp)
    };
    /*--------------------- archive Livre ----------------------*/
    function archiveLivreById(id) {
        console.log(id)

        let Archive = livres.map(L => L.id === id ? ({
            id: L.id, title: L.title,
            libelle: L.libelle, prix: L.prix, auteur: L.auteur, edition: L.edition, exemplaire: L.exemplaire,
            archive: String(!(JSON.parse(L.archive))),


        }) : L)
        console.log(Archive);
        archiveLivre(id)
        setLivres(Archive)
    };
    /*--------------------- Main ----------------------*/

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (


        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="gestion des livres"
            />
            <div>
                <Button
                    onClick={() => showModal()}
                    type="primary"
                    style={{
                        margin: 16,
                        float: "right"
                    }}
                >
                    Add Livre
            </Button>

                <Modal
                    title="Add Livre"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
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
                <Button
                    onClick={() => ajouterLivre(Livre)}
                    type="primary"
                    style={{
                        margin: 16,
                        float: "right"
                    }}
                >
                    Add random Livre
                </Button>

                <br />
                <br />
                <br />

                <Table columns={columns} dataSource={livres} onChange={onChange}
                    pagination={{ position: ["bottomCenter"] }}

                    bordered />

            </div>
        </>
    );
}