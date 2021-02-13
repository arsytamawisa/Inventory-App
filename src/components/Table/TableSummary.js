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


export default function TableSummary(props) {
    const [dropdownOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!dropdownOpen)
    const { SearchBar } = Search;
    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }]

    const columns = [
        {
            dataField: 'item.name',
            text: 'Item',
            sort: true
        },
        {
            dataField: 'totalQuantity',
            text: 'Quantity',
            sort: true
        },
        {
            dataField: 'totalPrice',
            text: 'Total Price',
            sort: true,
        }
    ];

    return (
        <ToolkitProvider
            keyField='id' bootstrap4 data={props.summary}
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