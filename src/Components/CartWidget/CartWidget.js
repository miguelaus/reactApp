import carrito from "./carrito.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartWdiget() {

    const {getQuantity} = useContext(CartContext)  


    return (
        
        <a  href="#" target="_blank" rel="noopener noreferrer" src={carrito}>
            <img src={carrito} className="carrito" alt="carrito"/>
{getQuantity()}
        </a>
        
    )
}

export default CartWdiget