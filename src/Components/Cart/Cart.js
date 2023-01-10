import {useCartContext} from '../../Context/CartContext'

const Cart = () => {

  const { cart} = useCartContext();
  console.log(cart)
  return (
    <div className="counter-display__container">
      {
        
        cart.map((product) => {
          const { id, product: name, type, price, img } = product;

          return (
            <span key={id} className="product-legend">
              Producto: {name} costo: {price} $ARS. Tipo de producto: {type} <img src={img} alt="producto"/>
            
            </span>
          );
        })
      }
    </div>
  );
}

export default Cart;


