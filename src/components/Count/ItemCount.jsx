import React from 'react';
import'./ItemCount.css';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function ItemCount({count, onAdd}) {
    const history = useHistory();

    const agregarCarrito = () => {
        history.push('/cart');
    }
    
    return (
        <div  className="countContainer">
            <div className="container">
                        <Button className='mr-4 boton' onClick={() => (onAdd('-'))}>-</Button>
                <div>
                    <div>
                        {count}
                    </div>
                </div>
                    <Button className='ml-4 boton' onClick={() => (onAdd('+'))}>+</Button>
            </div>
            <div ClassName="button">
            <button 
                className= "button primary"
                onClick={agregarCarrito}
                ><h5 className="carrito">Agregar al carrito</h5></button>
            </div>
       </div> 
    )
}
