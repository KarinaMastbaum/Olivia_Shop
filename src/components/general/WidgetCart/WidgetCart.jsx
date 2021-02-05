import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.cart.map(item => <p key={item.id + item.data.title}>{item.data.title}</p>)
            }
            <button>
            <Link className="detalle" to={`/cart`}>Cart</Link>
            </button>
            <button onClick={action}>Cerrar</button>
        </div>
    )
}

export default WidgetCart;