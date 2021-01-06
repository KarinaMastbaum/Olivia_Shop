import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import dress1 from '../../images/dress1.jpg';
import dress2 from '../../images/dress2.jpg';
import dress3 from '../../images/dress3.jpg';
import dress4 from '../../images/dress4.jpg';


const ItemDetail = ({}) => {

   const [product, setProduct] = useState(null);

   const getProduct = new Promise ((resolve) => {
      setTimeout(() => {
          resolve({
             id: 1,
            titulo: "Vestido Naomi floral",
            imagen: dress1,
            descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo, super comodo, perfecto para dia como para noche",
            precio: 2500,
          });
      }, 2000)
  })


  useEffect (() => {

   getProduct.then( response => setProduct(response));

  }, [])


return (
   <>
      {
         product ?
         <div classNAme="container">
      
             <ProductDetail item={product}/> 

         </div> :
             
         <p>Cargando Producto...</p>
             
      }

     </>
)

}

export default ItemDetail;