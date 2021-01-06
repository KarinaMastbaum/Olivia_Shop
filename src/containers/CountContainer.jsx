import React, { useState } from 'react';
import ItemCount from '../components/Count/ItemCount';



export default function CountContainer({min, max}) {
    
    const [contador, setContador ] =useState(0);
    
    const onAdd = (sign) => {
        if ( ( sign === '+' && contador <= max) ) setContador(contador+1)
        else if ( (sign === '-' && contador > min) ) setContador(contador-1);
    }

    return (
        <ItemCount count={contador} onAdd={onAdd}/>   
    )
}
