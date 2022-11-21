import "./Nav.css";
import carrito from './carrito.png';
import CartWidget from "../CartWidget/CartWidget"

function Nav() {
    return (
        
        <nav className="navigation my-2 d-flex">
            
                                <ul className="nav nav-pills mb-3 d-flex" id="pills-tab" role="tablist">
                                    <li className="nav-item mx-2" >
                                        <a className="nav-link active" className="btn btn-outline-primary" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Plato</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                         <a className="nav-link" className="btn btn-outline-danger"id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Postre</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                         <a className="nav-link" className="btn btn-outline-info"id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Bebida</a>
                                    </li>
                                </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div>
                    </div>
                <CartWidget />
            
        </nav>
    )
}

export default Nav;