import React from 'react';
import'./ItemCount.css';
import { Button } from 'react-bootstrap';

export default function ItemCount({count, onAdd}) {
    
    const agregarCarrito = () => {
        alert(`Agregaste ${count} productos al carrito`);
    }
    
    return (
        <div  className="countContainer">
            <div className="count">
                        <Button className='mr-4 boton' onClick={() => (onAdd('-'))}>-</Button>
                <div>
                    <div>
                        {count}
                    </div>
                </div>
                    <Button className='ml-4 boton' onClick={() => (onAdd('+'))}>+</Button>
            </div>
            <div>
            <button 
                className= "button primary"
                onClick={agregarCarrito}
                >Agregar al carrito</button>
            </div>
       </div> 
    )
}
