import {useCartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
const Cart = () => {

  const { cart, clearCart, removeProduct, getTotal} = useCartContext();
  
  return (
    <>
    {
      !cart.length 
      ?<div>
        <h2>Tu carrito esta vacio!</h2>
        <Link to='/'>Ir a comprar</Link>
      </div>
      :<div className="counter-display__container">
      {
        
        cart.map((product) => {
          const { id, product: name, type, price, img } = product;

          return (
            <div className="card body mt-3 bg-black border border-primary">
              <div className ="my-3">
              <span key={id} className="product-legend">
              <h1 className="card-title text-white"> Producto: {name} </h1>
                    
                    
              <h2 className="text-white"> costo: {price} $ARS. </h2>
                    
              <h3 className="text-white">      Tipo de producto: {type}  </h3>
                    
                    <img src={img} className="card-img-top mb-2 mt-2" alt="producto"/>
                
                
                <button className="btn btn-danger" onClick={()=>removeProduct(id)}>Eliminar del carrito</button>
              </span>
              </div>
              </div>
          );
        })
      }
      <p className="border border-success text-white">Total a pagar: ${getTotal()}</p>
      <button className="btn btn-light" onClick={clearCart}>Vaciar Carrito</button>
      <button className="btn btn-success my-2 mx-1">Finalizar Compra</button>
    </div>
    }
    </>
  );
}

export default Cart;


