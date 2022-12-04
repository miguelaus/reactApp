import {NavLink, Link, Outlet} from "react-router-dom";


function AboutUs() {
    return (
        <div className="aboutUs__container">
                <div className="title"> 
                    <h2> Fede Bistro Bar!</h2>
                      <p> Portal dedicado a la venta online de Productos Alimenticios. </p>
                    <Link></Link>
                </div>
            <Outlet />

        </div>
    )
}

export default AboutUs