import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown
} from 'reactstrap'



const ItemRow = ({ data, onDeleted }) => {
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)

  return (
    <tr>
      <td> {data.id} </td>
      <td> {data.name} </td>
      <td> {data.price} </td>
      <td>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="outline-dark" caret>Options</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to={`item/${data.id}/edit`} style={{ width: 100 }} className="btn btn-outline-primary mr-3">Edit</Link>
            </DropdownItem>
            <DropdownItem>
              <Button color="outline-danger" style={{ width: 100 }} onClick={onDeleted}>Delete</Button>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </td>
    </tr>
  )
}

export default ItemRow
