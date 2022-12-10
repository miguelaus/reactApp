import React from "react"


function ItemDetail({product}) {
    
    
    return (
        <div className="card body mt-3 bg-black border border-primary">
            <h1 className="card-title text-white">{product.name}</h1>
            <p className="text-white">Price: ${product.price}</p>
            <p className="text-white">{product.type}</p>
            <img src={product.img} className="card-img-top mb-2 mt-2" alt="Producto"></img>
        </div>
    )
}


export default ItemDetail