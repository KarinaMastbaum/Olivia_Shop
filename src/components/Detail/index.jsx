import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../db';

const ItemDetail = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log(typeof id);
  const db = getFirestore();

  useEffect(() => {
  if(id) {
    db.collection('productos').doc(id).get()
    .then(doc => {
      console.log(doc.exists)
        if(doc.exists) {
            setProduct({id: doc.id, data: doc.data()});
            console.log(id);
        }
    })
    .catch(e => console.log(e));
  }
    console.log("hola");
  }, [product, id]);

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


