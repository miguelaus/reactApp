import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState,useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ItemDetail({product}) {

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useContext(CartContext)

    const showToastMessage = () => {
        toast.success('Tu producto se ha agregado correctamente !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const onAdd = (quantity) =>{
        
        addProduct(product,quantity)
        setGoToCart(true)
        showToastMessage()
    }
    
    return (
        <div className="card body mt-3 bg-black border border-primary clase1">
            <h1 className="card-title text-white">{product.name}</h1>
            <p className="text-white">Price: ${product.price}</p>
            <p className="text-white">{product.type}</p>
            <img src={product.url} className=" m-autocard-img-top mb-2 mt-2" alt="Producto"></img>
            {
              goToCart
              ? <Link to='/cart' className=" m-auto btn btn-success mb-2">Finalizar Compra</Link>
              : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/> 
              
            }
            <ToastContainer />
            <Link to='/' className="mx-2 btn btn-primary btn-sm mb-3">Seguir comprando</Link>
            
        </div>
        
        
    )
}


export default ItemDetail