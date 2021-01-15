import {useContext, Link} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    console.log(data);

    return (
        <>
            <h1>Carrito</h1>

            {
                data.items.map(item => (
                    <li>
                        <div>
                            <h2>{item.title}</h2>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio por unidad: <strong>${item.item.price}</strong></p>
                            <p>Precio total: <strong>${item.item.price * item.cantidad}</strong></p>
                        </div>
                    </li>

                ))
            }

            
            <div className="final">
                <p>Precio total: {data.Total}</p>

                <Link to="/checkout">Finalizar compra</Link>
            </div>
               
        </>
    )
}

export default Cart;