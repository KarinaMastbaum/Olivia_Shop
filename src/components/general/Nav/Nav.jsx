import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Ropa',
            ruta: '/category/Ropa',
        },
        {
            texto: 'Accesorios',
            ruta: '/category/Accesorios',
        },
        {
            texto: 'Zapatos',
            ruta: '/category/Zapatos',
        }
    ]

    const qty = 1;

    return (
             <nav>
                <div>
                    <header>
                        <div className="navBar">
                            <div>
                            <a href="/">
                                <CartIcon/>
                            </a>
                            </div>
                            <div>
                            <ul className="container">
                                <li><a href="/" className="inicio">Inicio</a></li>
                                <li><a href="/" className="productos">Productos</a>
                                <ul>
                                    <li className="menuItems">
                                        {
                                            menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} />)   
                                        }
                                    </li> 
                                </ul>
                                </li>
                                <li><a href="/" className="contacto">Contacto</a></li>
                            </ul>
                            </div> 
                        <div>
                            {/* <h1>Carrito</h1> */}
                        {
                            !!qty && <NavCart action={action} qty={qty} />
                        }
                        </div>                                   
                    </div> 
                </header>
            </div>
        </nav>
    )
}

export default Nav;