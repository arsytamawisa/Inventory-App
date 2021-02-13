import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { findById, save } from "../../actions/stock"
import { connect } from "react-redux"
import { findAll } from "../../actions/item"
import { saveStock } from '../../reducers/stock'
import Swal from 'sweetalert2'

const StockForm = ({ isLoading, findById, stock, savedStock, save, items, findAll }) => {
    const { id } = useParams();
    const [data, setData] = useState({})
    let [quantity, setQuantity] = useState(0)
    const history = useHistory();

    useEffect(() => {
        findAll()
    }, [findAll])


    useEffect(() => {
        if (data && id && parseInt(id) != data.id) {
            findById(id)
            setData(stock)
        } else if (id && data == null) {
            setData(stock)
        }
    }, [stock])

    useEffect(() => {
        if(stock) setQuantity(stock.quantity)
        else setQuantity(0)
    }, [])

    useEffect(() => {
        if (savedStock) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                showConfirmButton: false,
                timer: 1000,
              })
            history.push('/stocks')
        }
    }, [savedStock])


    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        value = parseInt(value)
        setData({ ...data, [name]: value })
    }


    const increment = () => {
        setQuantity(++quantity)
        setData({ ...data, quantity})
    }

    const decrement = () => {
        if(quantity > 0) setQuantity(--quantity)
        setData({ ...data, quantity})
    }

    const lusin1 = () => {
        setQuantity(12)
        setData({ ...data, quantity})
    }

    const lusin2 = () => {
        setQuantity(24)
        setData({ ...data, quantity})
    }

    const handleSubmit = e => {
        e.preventDefault()
        save(data)
    }


    return (
        <div className="container">
            <div className="card col-8 offset-2 mt-5">
                <div className="card-body">
                    {!isLoading ? items &&

                        <form onSubmit={handleSubmit}>
                            
                            <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                            <div className="form-group">
                                <label htmlFor="code">Quantity</label>
                                {/* <button className="badge badge-secondary ml-2 mr-1" onClick={decrement}>-</button>
                                <button className="badge badge-secondary" onClick={increment}>+</button>
                                <button className="badge badge-secondary ml-2 mr-1" onClick={lusin1}>1 lusin</button>
                                <button className="badge badge-secondary" onClick={lusin2}>2 lusin</button> */}
                                <input onChange={handleChange} className="form-control" type="text" value={data?.quantity || quantity} name="quantity" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Item</label>
                                <select className="form-control" name="itemId" onChange={handleChange}>
                                    <option value="false" hidden>-- Select Option --</option>
                                    {items.map(item => {
                                        return (
                                            <option value={item.id}
                                                selected={item.id == data?.item?.id || false}>
                                                {item.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>

                            <Link to='/stocks' className="btn btn-outline-danger float-right" style={{ width: 100 }}>Back</Link>
                            <button className="btn btn-outline-primary float-right mr-3"> {id > 0 ? "Update" : "Submit"} </button>
                        </form> :
                        <div>Loading ...</div>

                    }
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        stock: state.findStockById.data,
        items: state.findAllItem.data,
        isLoading: state.findStockById.isLoading,
        update: state.updateStock,
        savedStock: state.saveStock.data
    }
}

const mapDispatchToProps = { findById, save, findAll }

export default connect(mapStateToProps, mapDispatchToProps)(StockForm)