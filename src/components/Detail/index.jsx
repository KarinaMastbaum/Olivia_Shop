import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams, Link} from 'react-router-dom';
import {products} from '../products';
import dress1 from '../../images/dress1.jpg';
import dress2 from '../../images/dress2.jpg';
import dress3 from '../../images/dress3.jpg';
import dress4 from '../../images/dress4.jpg';


const ItemDetail = ({}) => {
   const {id} = useParams();
   const [product, setProduct] = useState(null);

   const getProduct = new Promise ((resolve) => {
      const selectedProduct = products.filter(item => item.id);
        resolve(selectedProduct[0]);
      });
//       setTimeout(() => {
//           resolve({
//              id: 1,
//             titulo: "Vestido Naomi floral",
//             imagen: dress1,
//             descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo, super comodo, perfecto para dia como para noche",
//             precio: 2500,
//           });
//       }, 2000)
//   })


  useEffect (() => {

   getProduct.then( response => setProduct(response));

  }, [])


return (
   <>
      {
         product ?
            <div classNAme="container">
               <ol className="breadcrum">
                  <li>
                        <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                  </li>
                  <li>
                        {product.title}
                  </li>
               </ol>
                    
      
               <ProductDetail item={product}/> 

            </div> :
             
         <p>Cargando Producto...</p>
             
      }

     </>
)

}

export default ItemDetail;