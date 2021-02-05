import {useContext} from 'react';
import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Store} from '../../../store';

const NavCart = ({action}) => {
    const [data] = useContext(Store);

    const sumItems = ()=>{
        let total = data.cart.reduce((t, product) => t + product.data.cantidad, 0);
console.log(total);
        return total
    }

    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{sumItems()}</span>
        </div>
    )
}

export default NavCart;