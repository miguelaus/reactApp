import { Link } from "react-router-dom";

function Item({product}) {
    
    return (
        <div className="card body mt-3 bg-black border border-primary">
        <div className ="my-3">
        <h2 className="card-title text-white">{product.name} </h2> 
        <p className="text-white"> Precio: {product.price} </p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">Detalles del producto</Link>
        <img src={product.img} className="card-img-top mb-2 mt-2 " alt="Producto"/>
        </div>
      </div>
    );
  }
  
  export default Item;