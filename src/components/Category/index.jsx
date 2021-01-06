import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    
    const {category_name} = useParams();

    const categories = (categories) => {
        switch(categories) {
            case 'ropa': return <p>Ropa</p>;
            case 'Zapatos': return <p>Zapatos</p>;
            case 'accesorios': return <p>Accesorios</p>
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