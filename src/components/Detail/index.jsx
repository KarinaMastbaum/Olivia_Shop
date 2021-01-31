import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../db';

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


