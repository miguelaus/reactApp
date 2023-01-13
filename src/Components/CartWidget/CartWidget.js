import carrito from "./carrito.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartWdiget() {

    const {getQuantity} = useContext(CartContext)  


    return (
        <div>
        
            <img src={carrito} className="carrito" alt="carrito"/>
<p className="text-white">{getQuantity()} </p>
            
        
        </div>
        
    )
}

export default CartWdiget