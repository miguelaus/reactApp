import {NavLink, Link, Outlet} from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";


function AboutUs() {
    return (
        <div className="aboutUs__container">
                <div className="title"> 
                    <h2> Disfruta de nuestro productos</h2>
                      <p> Portal dedicado a la venta online de Productos Alimenticios. </p>
                    <Link></Link>
                </div>
                <ItemList />
            <Outlet />

        </div>
    )
}

export default AboutUs