import { Children } from "react";
import Nav from "../Nav/Nav";
import { PAGES } from "../../Utils/main-pages"


export default function Layout (props) {
    const {Children} = props;
    
    return (
        
        <div className="layout__container bg-black">
            <Nav pages={ PAGES } />
            {Children}
        </div>


    )
}