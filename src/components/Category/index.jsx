import {useState, useEffect} from 'react';
import {products} from '../products';
import {useParams} from 'react-router-dom';
import ProductsList from './ProductsList';
import './Category.css';

const Category = () => {
    const {category_name} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(category_name) {
            setProducts(products.filter(products => products.category === category_name))
        }
    }, [category_name])

    return (
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ProductsList products={products} />
        </section>
    )
}

export default Category;