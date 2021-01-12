import {useState, useContext} from 'react';
import './ProductDetail.css';
// import {Store} from '../../store';
import {useHistory} from 'react-router-dom';

const ProductDetail = ({item}) => {
    const history = useHistory();
    // const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

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

                    <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    />	
                
                    <button className="botonProductItem" onClick={onAdd}>Agregar al Carrito</button>

                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>
                    </div>
                </div>
        </article> 
    )
}

export default ProductDetail;
