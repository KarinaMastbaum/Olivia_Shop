import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);


    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.cart.map(item => <p className="container" key={item.id + item.data.title}>
                    <h3 className="titulo">{item.data.title}</h3>
                    <img className="imagen" src={item.data.image} alt="imagen"></img>   
                    <p className="precio">${item.data.price}</p>
                    <p className="cantidad">Cantidad: {item.data.cantidad}</p>
                    </p>)
            }
            <button className="boton">
            <Link className="detalle" to={`/cart`}>Cart</Link>
            </button>
            <button className="boton" onClick={action}>Cerrar</button>
        </div>
    )
}
export default WidgetCart;