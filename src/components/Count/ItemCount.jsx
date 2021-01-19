import React, {useState} from 'react';
import'./ItemCount.css';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function ItemCount({data, setData, min, max}) {
    const [contador, setContador ] =useState(0);
    const {onAdd, cart } = data;

    const agregarCarrito = () => {

    }
    
    return (
        <div  className="countContainer">
            <div className="container">
                        <Button className='mr-4 boton' onClick={() => (onAdd('-', contador, setContador, max, min))}>-</Button>
                <div>
                    <div>
                        {contador}
                    </div>
                </div>
                    <Button className='ml-4 boton' onClick={() => (onAdd('+', contador, setContador, max, min))}>+</Button>
            </div>
       </div> 
    )
}
