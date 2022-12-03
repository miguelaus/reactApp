import React from "react";
import Margarita from `../Images/margarita.jpg`

function Card() {
    return (
        <div classNname="card">
            <img src={Margarita} alt="Pizza Margarita"></img>
            <div className="card-body">
                <h4 className="card-title"> Titulo</h4>
                     <p className="card-text text-secondary">
                         Descripcion del producto    
                     </p>

            </div>

        </div>
    )
}


export default Card