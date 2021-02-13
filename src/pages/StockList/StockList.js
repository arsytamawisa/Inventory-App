import React, { useEffect, useState } from 'react'
import StockRow from "./StockRow"
import SummaryRow from './SummaryRow';
import { connect } from "react-redux"
import { findAll, removeById, summary } from "../../actions/stock"
import Container from './../../components/Container'
import classnames from 'classnames'
import TableSummary from './../../components/Table/TableSummary';
import TableStock from './../../components/Table/TableStock';
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


const StockList = ({ findAll, stocks, isRemoved, removeById, summary, summaryStock }) => {

  useEffect(() => {
    if (isRemoved) {
      findAll()
    }
  }, [isRemoved])

  useEffect(() => {
    findAll()
    summary()
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
            onClick={() => { toggle('1'); }}> Data Stocks </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}> Summary </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TableStock onDeleted={onDelete} dataa={stocks} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="!2">
              <TableSummary summary={summaryStock}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return {
    stocks: state.findAllStock.data || [],
    summaryStock: state.summaryStock.data || [],
    isRemoved: state.removeStockById,
    error: state.findAllStock.error,
    isLoading: state.findAllStock.isLoading || state.removeStockById.loading,
  }
}

const mapDispatchToProps = { findAll, removeById, summary }

export default connect(mapStateToProps, mapDispatchToProps)(StockList)