import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Ropa',
            ruta: '/Ropa',
        },
        {
            texto: 'Accesorios',
            ruta: '/Accesorios',
        },
        {
            texto: 'Zapatos',
            ruta: '/Zapatos',
        }
    ]


    return (
             <nav className="navBar">
                 <header>
                    <div className="imagen">
                        <a href="/">
                            <CartIcon/>
                        </a>
                    </div>
            <div className="container">

                <ul className="menuItems">
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                </ul>
                
                <NavCart action={action} />
            </div>
            </header>
        </nav>
    )
}


export default Nav;