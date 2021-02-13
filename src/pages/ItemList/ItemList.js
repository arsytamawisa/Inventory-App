import React, { useEffect, useState } from 'react'
import ItemRow from "./ItemRow"
import { connect } from "react-redux"
import { findAll, removeById } from "../../actions/item"
import Container from './../../components/Container'
import classnames from 'classnames'
import TableItem from './../../components/Table/TableItem';
import Swal from 'sweetalert2';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'


const ItemList = ({ findAll, items, isRemoved, removeById }) => {

  useEffect(() => {
    if (isRemoved) {
      findAll()
    }
  }, [isRemoved])

  useEffect(() => {
    findAll()
  }, [])

  const onDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Item has been deleted.',
          showConfirmButton: false,
          timer: 2000,
        })
        removeById(id)
      }
    })
  }


  /* Tab Reactstrap */
  const [activeTab, setActiveTab] = useState('1')
  const toggle = tab => (activeTab !== tab) ? setActiveTab(tab) : ''


  return (
    <Container classname="mt-5">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}> Data Items </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}> Add Data </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TableItem items={items} onDeleted={onDelete} />

              {/* <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items.list && items.list.map((e, i) => {
                      return (
                        <ItemRow onDeleted={() => onDelete(e.id)} key={i} data={e} />
                      )
                    })
                  }
                </tbody>
              </table> */}

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">

        </TabPane>
      </TabContent>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.findAllItem.data || [],
    // error: state.findAllUnit.error,
    isRemoved: state.removeItemById,
    // units: state.findAllUnit.data || [],
    // isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
  }
}

const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)