import React, { useState, useRef, useEffect } from 'react';

import 'antd/dist/antd.css';
import { Table, Button, message } from 'antd';
import { getLivreNonArchive } from "../../../services/livres.service"
import { empruntLivre } from "../../../services/emprunt.service"

import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Input, Space } from 'antd';
import { NavLink, useRouteMatch, useHistory } from "react-router-dom"
import { PageHeader } from 'antd';

export default function Emprunt() {
    function emprunt(id) {
        var data = {
            idUser: localStorage.getItem('user'),
            idLivre: id,
        }
        var test = empruntLivre(data)
        if (test === true) {
            message.success("livre emprunt avec success")
        } else {
            message.error("vous avez déjà atteint le maximum d'emprunt")

        }
    }
    useEffect(() => {

        init().then(function (value) {
            setLivres(value)
        })
    })
    const init = async () => {
        const result = await getLivreNonArchive()
        return (result)
    }
    const [livres, setLivres] = useState([])
    const [searchText, setSearchText] = useState("")
    const [searchedColumn, setSearchedColumn] = useState("")
    const searchInput = useRef(null)

    let { path } = useRouteMatch()
    let history = useHistory();



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
            title: 'Nombre Exemplaire',
            dataIndex: 'exemplaire',
            sorter: {
                compare: (a, b) => a.exemplaire - b.exemplaire,
                multiple: 5,
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span style={{ textAlign: "center" }}>
                    <Button key="details" value="default" >
                        <NavLink to={`${path}/${record.id}`} activeClassName="active">
                            Details
                    </NavLink>
                    </Button>
                    &nbsp;

                    <Button key="submit" type="primary" onClick={() => emprunt(record.id)}>
                        emprunté
                    </Button>

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
                title="List of books available"
            />
            <div>
                <Table columns={columns} dataSource={livres} onChange={onChange}
                    pagination={{ position: ["bottomCenter"] }}

                    bordered />

            </div>
        </>
    );
}