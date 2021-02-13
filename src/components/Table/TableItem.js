import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/table.css';
import {
    Button,
    Container,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    ButtonDropdown
} from 'reactstrap'

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function TableItem(props) {
    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)
    const { SearchBar } = Search;
    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }]

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
            headerStyle: () => {
                return {
                    width: "5%"
                }
            }
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true
        },
        {
            dataField: 'price',
            text: 'Price',
            sort: true
        },
        {
            dataField: 'link',
            text: 'Action',
            formatter: (rowContent, row) => {
                return (
                    <Container>
                        <Link to={`item/${row.id}/edit`} style={{ width: 100 }} className="btn btn-outline-primary mr-3">Edit</Link>
                        <Button color="outline-danger" onClick={() => props.onDeleted(row.id)} style={{ width: 100 }}>Delete</Button>
                    </Container>
                )
            },
            headerStyle: () => {
                return {
                    width: "25%"
                }
            }
        }
    ];

    return (
        <ToolkitProvider
            keyField='id' bootstrap4 data={props.items}
            columns={columns} defaultSorted={defaultSorted} search>
            {
                props => (
                    <div>
                        <SearchBar {...props.searchProps} />
                        <BootstrapTable
                            pagination={paginationFactory()}
                            {...props.baseProps}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    )
}