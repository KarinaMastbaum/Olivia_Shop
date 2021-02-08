import {useState, useContext} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom'; 
import {getFirestore} from '../../db'; 
import CountContainer from '../../containers/CountContainer'; 

const ProductDetail = ({item}) => {
    const history = useHistory();
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const {cart} = data;

    const agregarCarrito= (productoId) => {
        
        const filtro = data.items.filter(prod => prod.id=== productoId)[0];

        if(!filtro.data.cantidad) {
            filtro.data.cantidad = data.contador;
            console.log(filtro.data.cantidad)
            setData({...data, cart: [...cart, filtro], contador: 0})
        } else {
   
            cart[cart.indexOf(filtro)].data.cantidad+=data.contador;
            setData({...data, cart: [...cart], contador: 0});
        }

    }


    const handleUpdatePrice = () => {
        db.collection('productos').doc(item.id).update({
            price: 3000,
        })
        .then(() => console.log('Se actualizó correctamente'))
        .catch(error => console.log(error));
    }

    const img = require(`../../images/${item?.data?.image}`);

    return (
        <article className="product">
            <div className="divDetail">
            <h1 className="titulo">{item.data.title}</h1>
                <img  className="imagen" src={img.default} alt="dress"/>
                    <p className="descripcion">{item.data.description}</p>
                    <p className="precio">${item.data.price}</p>
                    <CountContainer min={0} max={10}/>
                <div>
                <button 
                className= "button primary"
                onClick={()=> agregarCarrito(item.id)}
                ><h5 className="carrito">Agregar al carrito</h5></button>
                <button className="btn" onClick={handleUpdatePrice}>Actualizar precio</button>
                </div>
            </div>
        </article> 
    )
}

export default ProductDetail;
