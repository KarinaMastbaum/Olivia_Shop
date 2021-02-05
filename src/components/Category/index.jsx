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
            const category = data.items.filter( prod => prod.category  === category_name);
            setProds(category);
        }
    }, [category_name, data.items])

    return (
        <section className="category">
            <ProductsList className="productList" products={prods} />
        </section>
    )
}

export default Category;