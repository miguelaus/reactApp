import { useContext } from "react";
import Context from "../../Context/CartContext";

const Cart = () => {

  const { store } = useContext(Context);
  return (
    <div className="counter-display__container">
      {
        
        store.products.map((product) => {
          const { id, product: name, type, price } = product;

          return (
            <span key={id} className="product-legend">
              Producto: {name} costo: {price} $ARS. Tipo de producto: {type} {img}
            
            </span>
          );
        })
      }
    </div>
  );
}

export default Cart;


