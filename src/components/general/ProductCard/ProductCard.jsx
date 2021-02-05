import {Link} from 'react-router-dom';
import React, {useState, useContext} from 'react';
import './ProductCard.css';
import {Store} from '../../../store/index';
import CountContainer from '../../../containers/CountContainer';



const ProductCard = ({id, titulo, imagen, descripcion, precio, type='grid'}) => {


    const [data, setData] = useContext(Store);
    const {cart} = data;

    const agregarCarrito= (productoId) => {
        
        const filtro = data.items.filter(prod => prod.id=== productoId)[0];

        if(!filtro.data.cantidad) {
            filtro.data.cantidad = data.contador;
            console.log(filtro.data.cantidad)
            setData({...data, cart: [...cart, filtro], contador: 0})
        } else {
            // console.log(cart.indexOf(filtro));
            cart[cart.indexOf(filtro)].data.cantidad+=data.contador;
            setData({...data, cart: [...cart], contador: 0});
        }

    }

    const img = require(`../../../images/${imagen}`);

    return(
            <div className={`productCard ${type}`}>
            <div>
                <h3>{titulo}</h3>
                <img src={img.default} alt='Producto' />
                <p>{descripcion}</p>
                <p>${precio}</p>
                <CountContainer min={0} max={10}/>
                <button 
                className= "button primary"
                onClick={()=> agregarCarrito(id)}
                ><h5 className="carrito">Agregar al carrito</h5></button>
                <Link className="detalle" to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </div>
        
    )
}

export default ProductCard;



