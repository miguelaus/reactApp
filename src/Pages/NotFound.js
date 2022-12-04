import {NavLink, Link, Outlet} from "react-router-dom";


function NotFound()  {
    return (
        <div className="aboutUs__container">
                <div className="title"> 
                    <h1>Pagina no encontrada</h1> 
                </div>
            <Outlet />

        </div>
    )
}

export default NotFound