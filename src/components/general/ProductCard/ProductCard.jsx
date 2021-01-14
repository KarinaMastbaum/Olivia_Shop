import {Link} from 'react-router-dom';
import React from 'react';
import './ProductCard.css';
import CountContainer from '../../../containers/CountContainer';


const ProductCard = ({id, titulo, imagen, descripcion, precio, type='grid'}) => {

    return(
            <div className={`productCard ${type}`}>
            <div>
                <h3>{titulo}</h3>
                <img src={imagen} alt='Producto' />
                <p>{descripcion}</p>
                <p>${precio}</p>
                <CountContainer min={0} max={10}/>
                <Link className="detalle" to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </div>
        
    )
}

export default ProductCard;



