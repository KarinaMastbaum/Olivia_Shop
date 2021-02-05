import React, {useState} from 'react';
import'./ItemCount.css';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function ItemCount({data, setData}) {
    
    
    const onAdd = (sign) => {
        if(sign === "-") {
            if( data.contador !== 0) {
                setData({...data, contador: data.contador - 1});
            }
        }
        if(sign === "+") {
            if( data.contador !== 10) {
                setData({...data, contador: data.contador + 1});
            }
        }
      }

    return (
        <div  className="countContainer">
            <div className="container">
                        <Button className='mr-4 boton' onClick={() => {onAdd('-');}}>-</Button>
                <div>
                    <div>
                        {data.contador}
                    </div>
                </div>
                    <Button className='ml-4 boton' onClick={() => {onAdd('+');}}>+</Button>
            </div>
       </div> 
    )
}
