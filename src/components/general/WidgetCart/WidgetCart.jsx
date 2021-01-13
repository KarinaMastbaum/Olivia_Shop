import './WidgetCart.css';

const WidgetCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p>Carrito de compras</p>
            <button onClick={action}>Cerrar</button>
        </div>
    )
}

export default WidgetCart;