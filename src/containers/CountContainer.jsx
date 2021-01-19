import React, { useState, useContext } from 'react';
import ItemCount from '../components/Count/ItemCount';
import {Store} from '../store/index'

export default function CountContainer({min, max}) {
    const [data, setData] = useContext(Store);


    return (
        <ItemCount data={data} setData={setData} min={min} max={max}/>   
    )
}
