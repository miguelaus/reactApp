import carrito from "./carrito.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from "react-router-dom"

function CartWdiget() {

    const {getQuantity} = useContext(CartContext)  


    return (
        <div className="mx-5 mt-2">
        
            <img src={carrito} className="carrito" alt="carrito"/>
            
                <p className="text-white my-2">{getQuantity()} productos en tu carrito</p>
                <Link to='/cart' className="btn btn-success">Finalizar Compra</Link>
            
        
        </div>
        
    )
}

export default CartWdiget