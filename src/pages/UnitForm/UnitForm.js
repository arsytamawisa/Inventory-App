import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { findById, save } from "../../actions/unit"
import { connect } from "react-redux"
import { saveUnit } from '../../reducers/unit'
import Swal from 'sweetalert2'


const UnitForm = ({ isLoading, findById, unit, savedUnit, save }) => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        if (data && id && parseInt(id) != data.id) {
            findById(id);
            setData(unit)
        } else if (id && data == null) {
            setData(unit)
        }
    }, [unit])

    useEffect(() => {
        if (savedUnit) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                showConfirmButton: false,
                timer: 1000,
              })
            history.push('/units')
        }
    }, [savedUnit])

    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        save(data)
    }



    return (
        <div className="container">
            <div className="card col-8 offset-2 mt-5">
                <div className="card-body">
                    {!isLoading ?

                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                            <div className="form-group">
                                <label htmlFor="code">Code</label>
                                <input onChange={handleChange} disabled={data?.id ? true : false} className="form-control" type="text" value={data?.code || ''} name="code" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input onChange={handleChange} type="text" className="form-control" value={data?.description || ''} name="description" />
                            </div>

                            <Link to='/units' className="btn btn-outline-danger float-right" style={{ width: 100 }}>Back</Link>
                            <button className="btn btn-outline-primary float-right mr-3"> {id > 0 ? "Update" : "Submit"} </button>
                        </form> :
                        <div>Loading ...</div>

                    }
                </div >
            </div >
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        unit: state.findUnitById.data,
        isLoading: state.findUnitById.isLoading,
        update: state.updateUnit,
        savedUnit: state.saveUnit.data
    }
}

const mapDispatchToProps = { findById, save }


export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
