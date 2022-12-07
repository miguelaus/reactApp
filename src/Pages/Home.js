import {Outlet} from "react-router-dom";



function AboutUs() {
    return (
        <div className="aboutUs__container">
                <div className="title"> 
                    <h2> Disfruta de nuestro productos</h2>
                      <p> Portal dedicado a la venta online de Productos Alimenticios. </p>
                    
                </div>
                
            <Outlet />

        </div>
    )
}

export default AboutUs