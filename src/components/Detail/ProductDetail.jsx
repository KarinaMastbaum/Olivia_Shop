import {useState, useContext} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';   

const ProductDetail = ({item}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	
    
    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
        });
        history.push('/cart');
    }    

    return (
        <article className="product">
            <div>
            <h1 className="titulo">{item.titulo}</h1>
                <img  className="imagen" src={item.imagen} alt="dress"/>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">${item.precio}</p>
                    
                    <div className='countContainer'>	
                    <button className='mr-4 boton'
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input className='cantidad'type="text" value={qty} readOnly/>	
                    <button className='mr-4 boton' onClick={() => setQty(qty + 1)}>+</button>	
                </div>
                <div ClassName="button">
                <button className="button primary" onClick={onAdd}><h5 className="carrito">Agregar al carrito</h5></button>
                </div>
            </div>
        </article> 
    )
}

export default ProductDetail;
