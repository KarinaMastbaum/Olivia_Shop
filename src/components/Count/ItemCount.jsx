import React, {useState, useEffect} from 'react';
import'./ItemCount.css';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function ItemCount({data, setData}) {
    
    const [count, setCount] = useState(0);
    
    const onAdd = (sign) => {
        if(sign === "-") {
            if( count !== 0) {
                setCount(count - 1);
                setData({...data, contador: count - 1});
            }
        }
        if(sign === "+") {
            if( count !== 10) {
                setCount(count + 1);
                setData({...data, contador: count + 1});
            }
        }
      }


      useEffect(() => {
         
        if(data.contador === 0) {
            setCount(0)
        }  

      }, [data.contador])

    return (
        <div  className="countContainer">
            <div className="container">
                        <Button className='mr-4 boton' onClick={() => {onAdd('-');}}>-</Button>
                <div>
                    <div>
                        {count}
                    </div>
                </div>
                    <Button className='ml-4 boton' onClick={() => {onAdd('+');}}>+</Button>
            </div>
       </div> 
    )
}
