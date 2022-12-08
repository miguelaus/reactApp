import React from "react"
import {useParams} from "react-router-dom"
import Product from "../../Data/products"

function ItemDetail() {
    const {itemId} = useParams()
    const thisProduct = Product.find(prod => prod.id === itemId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.type}</p>
        </div>
    )
}


export const getProduct = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Product);
            
        }, 2000);
    });
};



export default ItemDetail