import {Link} from 'react-router-dom';
import React, {useState, useContext} from 'react';
import './ProductCard.css';
import {Store} from '../../../store/index';
import CountContainer from '../../../containers/CountContainer';



const ProductCard = ({id, titulo, imagen, descripcion, precio, type='grid'}) => {

    // Verifico que todos los datos lleguen
    // console.log(id);
    // console.log(titulo);
    // console.log(imagen);
    // console.log(descripcion);
    // console.log(precio);
    // console.log(type);

    const [data, setData] = useContext(Store);
    const {cart} = data;

    const agregarCarrito= (productoId) => {
        
        const cantidad = 0;

        console.log('Resltado de data.items: ', data.items);
        console.log('Resltado de prod.id: ', data.items._id);
        console.log('Resltado de productoID: ', productoId);
        const filtro = data.items.filter(prod => Number(prod._id)=== Number(productoId))[0];
        console.log('Resltado de filter: ', filtro);
        console.log('Resltado de filter.cantidad: ', filtro.cantidad);
        if(!filtro.cantidad) {
            filtro.cantidad = 1;
            setData({...data, cart: [...cart, filtro]})
        } else {
            filtro.cantidad++;
            setData({...data, cart: [...cart, filtro]});
        }

    }

    const img = require(`../../../images/${imagen}`);
    return(
            <div className={`productCard ${type}`}>
            <div>
                <h3>{id}</h3>
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



