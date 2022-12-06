import { NavLink } from "react-router-dom";
import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";

export default function Nav(props) {
  const { pages } = props;
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {pages.map((page) => (
          <li className="mx-5" key={`${page.id}-page`}>
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
  
}
