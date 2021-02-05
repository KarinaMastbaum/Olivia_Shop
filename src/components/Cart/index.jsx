import {useContext, Link} from 'react';
import {Store} from '../../store';



const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
        {
                data.cart.map(item => (
                    <li key={item.id}>
                        <div>
                            <h2>{item.data.title}</h2>
                            <p>Cantidad: {item.data.cantidad}</p>
                            <p>Precio por unidad: <strong>${item.data.price}</strong></p>
                            <p>Precio total: <strong>${item.data.price * item.data.cantidad}</strong></p>
                        </div>
                    </li>
                ))
            }
            </>
    )

}

export default Cart;

// const Cart = () => {
//     const [data, setData] = useContext(Store);


//     console.log(data);

//     return (
//         <>
//             <h1>Carrito</h1>

//             {
//                 data.cart.map(item => (
//                     <li key={item.id}>
//                         <div>
//                             <h2>{item.title}</h2>
//                             <p>Cantidad: {item.cantidad}</p>
//                             <p>Precio por unidad: <strong>${item.price}</strong></p>
//                             <p>Precio total: <strong>${item.price * item.cantidad}</strong></p>
//                         </div>
//                     </li>

//                 ))
//             }

            
//             <div className="final">
//                 {/* <p>Precio total: {data.Total}</p> */}

//                 <Link to="/checkout">Finalizar compra</Link>
//             </div>
               
//         </>
//     )
// }

// export default Cart;