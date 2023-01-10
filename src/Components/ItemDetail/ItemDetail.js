import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState,useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



function ItemDetail({product}) {

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useContext(CartContext)


    const onAdd = (quantity) =>{
        console.log(quantity)
        addProduct(product,quantity)
        setGoToCart(true)
    }
    
    return (
        <div className="card body mt-3 bg-black border border-primary">
            <h1 className="card-title text-white">{product.name}</h1>
            <p className="text-white">Price: ${product.price}</p>
            <p className="text-white">{product.type}</p>
            <img src={product.img} className="card-img-top mb-2 mt-2" alt="Producto"></img>
            {
              goToCart
              ? <Link to='/cart' className="btn btn-success">Finalizar Compra</Link>
              : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            }
             
        </div>
    )
}


export default ItemDetail