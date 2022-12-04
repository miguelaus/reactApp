import {NavLink, Link, Outlet} from "react-router-dom";
import "./AboutUs.css";

function AboutUs()  {
    return (
        <div className="aboutUs__container" area="content">
            <div className="title"> 
                <h2> Sobre nosotros</h2>
                <p> Empresa dedicada a la comercializaciòn de alimentos </p>
                <Link>  </Link>
            </div>
        <Outlet />

        </div>
    )
}

export default AboutUs