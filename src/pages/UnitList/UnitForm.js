import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { findById, save } from "../../actions/unit"
import { connect } from "react-redux"
import { saveUnit } from '../../reducers/unit'
import Swal from 'sweetalert2'

export default function UnitForm({ isLoading, savedUnit, save }) {
    const { id } = useParams();
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        console.log("Saved");
        if (savedUnit) {
            console.log("Saved");
        }
    }, [savedUnit])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
        console.log(data);
    }

    console.log(save,savedUnit);

    return (
        <div className="card col-8">
            <div className="card-body">
                {!isLoading ?

                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input onChange={handleChange} className="form-control" type="text" value={data?.code || ''} name="code" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input onChange={handleChange} type="text" className="form-control" value={data?.description || ''} name="description" />
                        </div>

                        {/* <Link to='/units' className="btn btn-outline-danger float-right" style={{ width: 100 }}>Back</Link> */}
                        <button className="btn btn-outline-dark float-right"> {id > 0 ? "Update" : "Submit"} </button>
                    </form> :
                    <div>Loading ...</div>

                }
            </div >
        </div >
    )
}
