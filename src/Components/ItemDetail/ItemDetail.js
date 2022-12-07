import React from "react"
import {useParams} from "react-router-dom"
import Products from "../../Data/products"

function ItemDetail() {
    const {itemId} = useParams()
    const thisProduct = Products.find(prod => prod.id === itemId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.type}</p>
        </div>
    )
}

export default ItemDetail