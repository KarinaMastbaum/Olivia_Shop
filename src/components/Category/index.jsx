import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    
    const {category_name} = useParams();

    const categories = (categories) => {
        switch(categories) {
            case 'ropa': return <p className="hola">Estoy en Ropa</p>;
            case 'Zapatos': return <p>Estoy en Zapatos</p>;
            case 'accesorios': return <p>Estoy en Accesorios</p>
            default: return <p>la categoría no existe</p>
        }
    }

    return (
        <>
            {
               categories(category_name) 
            }
        </>
    )
}

export default Category;