import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown
} from 'reactstrap'


export default function SummaryRow({ coba, data, onDeleted }) {

  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)

  return (
    <tr>
      <td>{coba}</td>
      <td>{data.item.name}</td>
      <td>{data.totalQuantity}</td>
      <td>{data.totalPrice}</td>
    </tr>
  )
}
