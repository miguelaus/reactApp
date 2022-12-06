import {NavLink, Link, Outlet} from "react-router-dom";

function ContactUs() {
    return (
        <div className="contact__container">
                <div className="title"> 
                    <h2> Contactanos!</h2>
                       <p> Contactanos a: FedeBistroBar@Fedebistro.com </p>
                    <Link> </Link>
                </div>
            <Outlet />
        </div>
    )
}

export default  ContactUs