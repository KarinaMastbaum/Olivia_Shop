import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';
import dress1 from '../../../'
const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

    const eliminarCarrito = (id) => {
        const eliminarDelCarrito = data.cart.filter( producto => producto.id !== id);

        setData({...data, cart: eliminarDelCarrito});
    }    

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.cart.map(item => {
                    const img = require(`../../../images/${item.data.image}`)
                    return(
                        <>
                            <div className="containerWidget" key={item.id + item.data.title}>
                            <h3 className="titulo">{item.data.title}</h3>
                            <img className="imagen" src={img.default} alt="imagen"></img>   
                            <p className="precios">${item.data.price}</p>
                            <p className="cantidad">Cantidad: {item.data.cantidad}</p>
                            
                            <button className="botonEliminarCarrito" onClick= {() => eliminarCarrito(item.id)}>
                                x
                            </button>
                            </div>
                        </>)})
            }
            <div>
            <button className="botonCarrito">
            <Link className="detalle" to={`/cart`}>Carrito</Link>
            </button>
            <button className="botonCerrar" onClick={action}>Cerrar</button>
            </div>
        </div>
    )
}
export default WidgetCart;