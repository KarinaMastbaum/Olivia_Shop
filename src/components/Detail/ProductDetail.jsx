import {useState, useContext} from 'react';
import './ProductDetail.css';
// import {Store} from '../../store';
import {useHistory} from 'react-router-dom';

const ProductDetail = ({item}) => {
    const history = useHistory();
    // const [data, setData] = useContext(Store);

    const onAdd = () => {

        history.push('/cart');
	
    }
    
    return (
        <article>
            <div className="container">
            <h1 className="titulo">{item.titulo}</h1>
                <img  className="imagen" src={item.imagen} alt="dress"/>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">${item.precio}</p>
                </div>
        </article> 
    )
}

export default ProductDetail;
