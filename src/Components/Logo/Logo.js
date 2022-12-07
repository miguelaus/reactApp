import logo from "./logo.png";
import {Link } from "react-router-dom";


const Logo = () => {
    return (
            <div>
                <div>

                        <Link to="/"> 
                             <img src={logo} alt="logo-pizza"
                                     style={{
                                     width:"80px",
                                     height:"80px"  }}/>
                        </Link>
                </div>
            </div>
            

    )
}
export default Logo