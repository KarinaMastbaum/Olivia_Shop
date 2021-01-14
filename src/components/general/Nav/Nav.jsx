import "./Nav.css";
import NavItem from "../NavItem/NavItem";
import NavCart from "../NavCart/NavCart";
import CartIcon from "./CartIcon";

import { Link } from "react-router-dom";


function Nav({ titulo, action }) {
  const menuItems = [
    {
      texto: "Ropa",
      ruta: "/ropa",
    },
    {
      texto: "Accesorios",
      ruta: "/accesorios",
    },
    {
      texto: "Zapatos",
      ruta: "/zapatos",
    },
  ];

  const qty = 1;

  return (
    <nav>
          <div className="navBar">
            <div>
              <Link to="/">
                <CartIcon />
              </Link>
            </div>
            <div className="menu">
              <ul>
               
                <ul>
                <li>
                  <Link to="/" className="inicio">
                    Inicio
                  </Link>
                </li>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                </ul>

              </ul>
            </div>
            <div>
              <NavCart action={action}/>
            </div>
          </div>
    </nav>
  );
}

export default Nav;