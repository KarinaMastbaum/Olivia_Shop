
import {useState} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './ProductsList.css';
import {BsListUl, BsFillGridFill} from 'react-icons/bs';

const ProductsList = ({products}) => {
    const [types, setTypes] = useState(true);

    return (
        <section className="products">
            <div>
                {
                    types ? 
                    <BsListUl onClick={() => setTypes(!types)} title="Ver como lista" /> :
                    <BsFillGridFill onClick={() => setTypes(!types)} title="Ver como grilla" />
                }
            </div>

            <ul className={`products_list ${types ? 'grid' : 'list'}`}>
                {
                    products.map(item => <li key={item.id}><ProductCard id={item.id} titulo={item.title} precio={item.price} categoria={item.category} type={`${types ? 'grid' : 'list'}`} /></li>)
                }
            </ul>
        </section>
    )
}

export default ProductsList;