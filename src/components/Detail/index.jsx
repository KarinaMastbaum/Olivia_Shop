import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../db';
// import dress1 from '../../images/dress1.jpg';
// import dress2 from '../../images/dress2.jpg';
// import dress3 from '../../images/dress3.jpg';
// import dress4 from '../../images/dress4.jpg';
// // import ProductDetail from "./ProductDetail";
// // import {products} from '../products';


const ItemDetail = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const db = getFirestore();

  useEffect(() => {
    db.collection('productos').doc(id).get()
    .then(doc => {
        if(doc.exists) {
            setProduct({id: doc.id, data: doc.data()});
        }
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <>
      {product ? (
        <div className="container">
          <ProductDetail item={product} />
        </div>
      ) : (
        <p>Cargando Producto...</p>
      )}
    </>
  );
};

export default ItemDetail;


