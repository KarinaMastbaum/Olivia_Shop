import {Link} from 'react-router-dom';
import React from 'react';
import './ProductCard.css';
import CountContainer from '../../../containers/CountContainer';


const ProductCard = ({id, titulo, imagen, descripcion, precio}) => {

    return(
            <div className="productCard">
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



// const ProductCard = ({id, titulo, precio}) => {
//     return (
//         <article className="productCard">
//             <img src="http://placehold.it/300x300" alt="Mi producto de prueba"/>
//             <div>
//                 <h3>{titulo}</h3>
//                 <p>${precio}</p>
//                 <Link to={`/detail/${id}`}>Ver detalle</Link>
//             </div>
//         </article>   
//     )   
// }

// export default ProductCard;