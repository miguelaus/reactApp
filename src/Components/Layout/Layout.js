import Nav from "../Nav/Nav";
import { PAGES } from "../../Utils/main-pages";
import "./Layout.css";

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout__container xr-5">
      <Nav pages={PAGES} />
      {children}
      
    </div>
  );
}

