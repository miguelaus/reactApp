import carrito from "./carrito.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from "react-router-dom"

function CartWdiget() {

    const {getQuantity} = useContext(CartContext)  


    return (
        <div className=" mt-2 m-auto">
        
            <img src={carrito} className="carrito" alt="carrito"/>
            
                <p className="text-white my-2">Hay {getQuantity()} productos en tu carrito</p>
                <Link to='/cart' className="btn btn-success">Mi carrito</Link>
            
        
        </div>
        
    )
}

export default CartWdiget