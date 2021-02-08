import {useState, useContext} from 'react';
import {Store} from '../../store';
import './Checkout.css';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';


const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
        numeroTarjeta: '',
        fechaVencimiento: '',
        nombreTitular: '',
        codigoSeguridad: '',
    })
    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const compra = {
            user: formData,
            items: data.items,
            totalPrice: sumTotal(data.cart),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    const sumTotal = cart => {
        let total = cart.reduce((t, product) => t += (product.data.price * product.data.cantidad), 0).toFixed(2);
        return total
    }


    return (

        <section className="checkout">
            <div className="container">
                <h2 className="finalizarCompra">Finalizar Compra</h2>

                {
                    !venta ?
                    
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                        <input type="number" value={formData.numeroTarjeta} onChange={handleChangeInput} name="numeroTarjeta" placeholder="Numero de Tarjeta" />
                        <input type="number" value={formData.fechaVencimiento} onChange={handleChangeInput} name="fechaVencimiento" placeholder="Fecha de vencimiento" />
                        <input type="text" value={formData.nombreTitular} onChange={handleChangeInput} name="nombreTitular" placeholder="Nombre del titular" />
                        <input type="number" value={formData.codigoSeguridad} onChange={handleChangeInput} name="codigoSeguridad" placeholder="Codigo de seguridad" />
                        <p className="totalPagar"> Total a pagar: ${sumTotal(data.cart)}</p>
                        <button className="pagar">Pagar</button>
                    </form>:
                
                    <p className="compraRealizada">La compra se realizó correctamente, tu número de seguimiento es: {idCompra}</p>
                }
                </div>
        </section>
    )
}

export default Checkout;