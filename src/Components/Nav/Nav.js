import "./Nav.css";


function Nav() {
    return (
        
        <nav className="navigation">
            
            <ul style={{
                display: "flex",
                justifyContent: "center",
                direction: "row",
                gap:"1rem",
            }}>
                <li style={{listStyle:"none"}}>
                    <a style={{ textDecoration:"none"}} href="www.google.es">Platos</a>
                </li>

                <li style={{listStyle:"none"}}>
                    <a style={{ textDecoration:"none"}} href="www.google.es">Bebidas</a>
                </li>

                <li style={{listStyle:"none"}}>
                    <a style={{ textDecoration:"none"}} href="www.google.es">Postres</a>
                </li>
            </ul>
          
        </nav>
    )
}

export default Nav;