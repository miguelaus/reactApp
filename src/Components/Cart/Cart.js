import {useCartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import "./Cart.css";

const Cart = () => {

  const { cart, clearCart, removeProduct, getTotal} = useCartContext();
  
  return (
    <>
    {
      !cart.length 
      ?<div>
        <h2 className="text-white my-2">¡Tu carrito esta vacio!</h2>
        <Link to='/' className="btn btn-primary btn-lg mb-3">Ir a comprar</Link>
      </div>
      :<div className="counter-display__container clase1">
      {
        
        cart.map((product) => {
          const { id, product: name, type, price, url } = product;

          return (
            <div className="card body mt-3 bg-black border border-primary">
              <div className ="my-3 ">
              <span key={id} className="product-legend">
              <h1 className="card-title text-white"> Producto: {name} </h1>
                    
                    
              <h3 className="text-white"> costo: {price} $ARS. </h3>
                    
              <h3 className="text-white">      Tipo de producto: {type}  </h3>
                    
                    <img src={url} className="card-img-top mb-2 mt-2 rounded" alt="producto"/>
                
                
                <button className="btn btn-danger" onClick={()=>removeProduct(id)}>Eliminar del carrito</button>
              </span>
              </div>
              </div>
          );
        })
      }
      <p className="border border-info text-white bg-yellow py-3">Total a pagar: ${getTotal()}</p>
      <button className="btn btn-light" onClick={clearCart}>Vaciar Carrito</button>
      <button className="btn btn-success my-2 mx-1">Finalizar Compra</button>
    </div>
    }
    </>
  );
}

export default Cart;


