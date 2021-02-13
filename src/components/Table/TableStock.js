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


export default function TableStock(props) {
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
            dataField: 'item.name',
            text: 'Item',
            sort: true
        },
        {
            dataField: 'quantity',
            text: 'Quantity',
            sort: true
        },
        {
            dataField: 'totalPrice',
            text: 'Total Price',
            sort: true,
        },
        {
            dataField: 'link',
            text: 'Action',
            formatter: (rowContent, row) => {
                return (
                    <Container>
                        <Link to={`stock/${row.id}/edit`} style={{ width: 100 }} className="btn btn-outline-primary mr-3">Edit</Link>
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
            keyField='id' bootstrap4 data={props.dataa}
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