import React, { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import './Gestionadhérents.css';
import { getAdhérents, bannir, ChangeEtatById as ChangeEtatByIdFromService, deleteAdhérents as deleteAdhérentsFromService } from '../../services/adherents.service';
import { Modal, Table, Input, Switch, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import {
    Link
} from "react-router-dom"
import { SearchOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';


function Gestionadhérents() {
    const [adhérents, setAdhérents] = useState([]);
    const [modal, setModal] = useState(false);
    const [ligne, setLigne] = useState();
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const showModal = (row) => {
        setModal(!modal);
        setLigne(row);
    };
    const handleBannir = (id) => {
        bannirById(id);
        showModal();
    }
    const handleCancel = e => {
        console.log(e);
        showModal();
    };
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText("");
    };

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        const result = getAdhérents();
        setAdhérents(result);
    }

    const deleteAdhérents = (id) => {
        let adhérent = adhérents.filter((adhérent) => adhérent.key !== id);
        deleteAdhérentsFromService(id);
        setAdhérents(adhérent);
    }

    const ChangeEtatById = (id) => {
        let newadhérent = adhérents.map(a => a.key === id ? ({
            key: a.key, username: a.username, email: a.email, password: a.password, date: a.date, adresse: a.adresse, tel: a.tel, biblio: a.biblio, banni: a.banni,
            etat: String(!(JSON.parse(a.etat))),
        }) : a);
        ChangeEtatByIdFromService(id);
        setAdhérents(newadhérent);
    }

    const bannirById = (id) => {
        let newadhérents = adhérents.map(a => a.key === id ? ({
            key: a.key, username: a.username, email: a.email, password: a.password, date: a.date, adresse: a.adresse, tel: a.tel, etat: a.etat, biblio: a.biblio,
            banni: String(!(JSON.parse(a.banni))),
        }) : a);
        bannir(id);
        setAdhérents(newadhérents);
    }
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
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.current.select());
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

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: "username",
            ...getColumnSearchProps('username'),
            render: (text, row, index) => {
                if (!modal) {
                    console.log(adhérents)
                    return <a onClick={() => showModal(row)}>{row.username}</a>;
                } else {
                    if (ligne.banni === "false") {
                        return (<Modal
                            title="Basic Modal"
                            visible={modal}
                            onOk={() => handleBannir(ligne.key)}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Return
                            </Button>,
                                <Button key="submit" type="primary" onClick={() => handleBannir(ligne.key)} danger>
                                    Bannir
                            </Button>,
                            ]}>
                            <h2>{ligne.username}</h2>
                            <h3>Date de naissance</h3><p>{ligne.date}</p>
                            <h3>Adresse </h3><p>{ligne.adresse}</p>
                            <h3>Tel </h3><p>{ligne.tel}</p>
                        </Modal>);
                    } else {
                        return (<Modal
                            title="Basic Modal"
                            visible={modal}
                            onOk={() => handleBannir(ligne.key)}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Retourner
                            </Button>,
                                <Button key="submit" type="primary" onClick={() => handleBannir(ligne.key)}>
                                    Pardonner
                            </Button>,
                            ]}>
                            <h2>{ligne.username}</h2>
                            <h3>Date de naissance</h3><p>{ligne.date}</p>
                            <h3>Adresse </h3><p>{ligne.adresse}</p>
                            <h3>Tel </h3><p>{ligne.tel}</p>
                        </Modal>);
                    }
                }
            },
        },
        {
            title: 'Banni',
            dataIndex: 'banni',
            filters: [
                {
                    text: 'banni',
                    value: 'true',
                }],
            onFilter: (value, record) => record.banni.indexOf(value) === 0,
            sorter: (a, b) => a.banni.length - b.banni.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Etat',
            dataIndex: 'etat',
            filters: [
                {
                    text: 'true',
                    value: 'true',
                }],
            onFilter: (value, record) => record.etat.indexOf(value) === 0,
            sorter: (a, b) => a.etat.length - b.etat.length,
            sortDirections: ['descend', 'ascend'],
            render: (text, row, index) => {
                if (row.etat === "true") {
                    return (<Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                        onChange={() => {
                            ChangeEtatById(row.key);
                        }}
                    />)
                } else {
                    return (<Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={() => {
                            ChangeEtatById(row.key);
                        }}
                    />)
                }
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, row, index) => {
                return (
                    <div>
                        <Link to={"/bibliothecaire/gestionadhérents/" + row.key} >
                            <Button type="primary">
                                Voir livres
                            </Button>
                        </Link>
                        &nbsp;
                        <Button key="submit" type="primary" onClick={() => deleteAdhérents(row.key)} danger>
                            Delete
                        </Button>
                    </div >)
            },
        },
    ];
    return (
        <Table columns={columns} dataSource={adhérents} bordered />
    );
}
export default Gestionadhérents