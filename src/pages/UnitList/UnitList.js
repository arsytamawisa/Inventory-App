import React, { useEffect, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from "react-router-dom"
import { findAll, removeById, save } from '../../actions/unit'
import { connect } from "react-redux"
import Container from "../../components/Container"
import UnitForm from './UnitForm';
import TableUnit from '../../components/Table/TableUnit';
import Swal from 'sweetalert2'
import { saveUnit } from './../../reducers/unit';



function UnitList({ isLoading, isRemoved, units, findAll, removeById, error }) {

    useEffect(() => {
        if (isRemoved) {
            findAll()
        }
    }, [isRemoved])


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
                    text: 'Unit has been deleted.',
                    showConfirmButton: false,
                    timer: 2000,
                })
                removeById(id)
            }
        })
    }

    useEffect(() => {
        findAll()
    }, [])


    /* Tab Reactstrap */
    const [activeTab, setActiveTab] = useState('1')
    const toggle = tab => (activeTab !== tab) ? setActiveTab(tab) : ''


    return (
        <Container error={error && error.message} classname="mt-5">

            <Nav tabs className="mb-4">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>Data Units</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>Add Data</NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <TableUnit units={units} onDeleted={onDelete} />
                            {/* <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Code</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !isLoading ?
                                            units.map((e, i) => {
                                                return (
                                                    <UnitRow onDeleted={() => onDelete(e.id)} key={i} data={e} number={i + 1} />
                                                )
                                            }) :
                                            <tr>
                                                <td colSpan="3"> Loading..</td>
                                            </tr>
                                    }
                                </tbody>
                            </table> */}
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <UnitForm savedUnit={saveUnit} save={save}/>
                </TabPane>
            </TabContent>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllUnit.error,
        isRemoved: state.removeUnitById,
        units: state.findAllUnit.data || [],
        savedUnit: state.saveUnit.data,
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
    }
}

const mapDispatchToProps = { findAll, removeById, save };

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
