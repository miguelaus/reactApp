import React from "react"
import {useParams} from "react-router-dom"
import Product from "../../Data/products"

function ItemDetail() {
    const {itemId} = useParams()
    const thisProduct = Product.find(prod => prod.id === itemId)
    
    return (
        <div className="card body mt-3 bg-black border border-primary">
            <h1 className="card-title text-white">{thisProduct.name}</h1>
            <p className="text-white">Price: ${thisProduct.price}</p>
            <p className="text-white">{thisProduct.type}</p>
            <img src={thisProduct.img} className="card-img-top mb-2 mt-2" alt="Producto"></img>
        </div>
    )
}





export default ItemDetail