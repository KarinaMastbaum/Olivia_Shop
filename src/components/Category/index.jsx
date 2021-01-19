import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Store} from '../../store/index';
import ProductsList from './ProductsList';
import './Category.css';

const Category = () => {
    const [data] = useContext(Store);
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(category_name) {
            const category = data.items.filter( prod => prod.category.toLowerCase()  === category_name);
            setProds(category);
        }
    }, [category_name, data.items])

    return (
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ProductsList products={prods} />
        </section>
    )
}

export default Category;