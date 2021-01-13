import {useState, useContext} from 'react';
import './ProductDetail.css';
import CountContainer from '../../containers/CountContainer';
// import {Store} from '../../store';

const ProductDetail = ({item}) => {
    // const [data, setData] = useContext(Store);
    
    return (
        <article>
            <div className="container">
            <h1 className="titulo">{item.titulo}</h1>
                <img  className="imagen" src={item.imagen} alt="dress"/>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">${item.precio}</p>

                    <CountContainer min={0} max={10}/>
                    </div>
        </article> 
    )
}

export default ProductDetail;
