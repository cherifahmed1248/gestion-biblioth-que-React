import React, { useState, useRef, useEffect } from 'react';

import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import { getLivresEmprunts, retournerLivreByIdEmprunt, getLivresEncoursByAdhérentId } from "../../services/emprunt.service"
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Input, Space } from 'antd';
import { NavLink, useRouteMatch, useHistory } from "react-router-dom"
import { PageHeader } from 'antd';
import { bannir, getAdherentById } from '../../services/adherents.service';

export default function GestionEmpruntsEncours() {
    let { params } = useRouteMatch()



    //const [livres, setLivres] = useState([])
    const [searchText, setSearchText] = useState("")
    const [searchedColumn, setSearchedColumn] = useState("")
    const searchInput = useRef(null)
    const [etat, setEtat] = useState(false)

    let { path } = useRouteMatch()
    let history = useHistory();


    const [livres, setLivres] = useState(init())
    function init() {
        const result = getLivresEmprunts(localStorage.getItem('user'))
        return (result)

    }
    const handleBannir = (id) => {
        console.log('id: ', id);
        console.log('getAdherentById(record.idUser).banni: ', getAdherentById(id).banni);
        bannir(id);
        console.log('getAdherentById(record.idUser).banni: ', getAdherentById(id).banni);
        setEtat(!etat)
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
            sorter: {
                compare: (a, b) => a.id - b.id,
                multiple: 85,
            },
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            sorter: {
                compare: (a, b) => a.userName.toLowerCase() !== b.userName.toLowerCase() ? a.userName.toLowerCase() < b.userName.toLowerCase() ? -1 : 1 : 0,
                multiple: 41,
            },
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('userName'),
        },
        {
            title: 'Livre title',
            dataIndex: 'title',
            sorter: {
                compare: (a, b) => a.title.toLowerCase() !== b.title.toLowerCase() ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 : 0,
                multiple: 4,
            },
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('title'),
        },
        {
            title: 'Auteur',
            dataIndex: 'auteur',
            sorter: {
                compare: (a, b) => a.auteur.toLowerCase() !== b.auteur.toLowerCase() ? a.auteur.toLowerCase() < b.auteur.toLowerCase() ? -1 : 1 : 0,
                multiple: 4,
            },
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('auteur'),
        },
        {
            title: "date d'emprunt",
            dataIndex: "dateEmprunt",
            sorter: {
                compare: (a, b) => a.auteur.toLowerCase() !== b.auteur.toLowerCase() ? a.auteur.toLowerCase() < b.auteur.toLowerCase() ? -1 : 1 : 0,
                multiple: 6,
            },
        },
        {
            title: "Etat",
            dataIndex: 'etat',
            sorter: {
                compare: (a, b) => a.etat !== b.etat ? a.etat < b.etat ? -1 : 1 : 0,
                multiple: 91,
            },

            render: Etat => (
                (Number(Etat) > 15) ?
                    <p>retard  {Etat - 15} jours </p>
                    :
                    <p>reste  {15 - Etat} jours</p>

            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span style={{ textAlign: "center" }}>
                    {(getAdherentById(record.idUser).banni === "false") ?

                        (<Button key="submit" type="primary" onClick={() => handleBannir(record.idUser)} danger>
                            Bannir
                        </Button>)
                        :
                        (<Button key="submit" type="primary" onClick={() => handleBannir(record.idUser)}>
                            Pardonner
                        </Button>)
                    }

                </span>

            ),

        },


    ];




    /*--------------------- Main ----------------------*/

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (


        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="liste des livre emprunté"
            />
            <div>
                <Table columns={columns} dataSource={livres} onChange={onChange}
                    pagination={{ position: ["bottomCenter"] }}

                    bordered />

            </div>
        </>
    );
}