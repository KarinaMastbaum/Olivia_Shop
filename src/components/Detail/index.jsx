import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import dress1 from '../../images/dress1.jpg';
import dress2 from '../../images/dress2.jpg';
import dress3 from '../../images/dress3.jpg';
import dress4 from '../../images/dress4.jpg';
// import ProductDetail from "./ProductDetail";
// import {products} from '../products';


const ItemDetail = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const getProduct = (id) => {
   const items = [
      {
        id: 1,
        titulo: "Vestido Naomi floral",
        imagen: dress1,
        descripcion:
          "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        precio: 2500,
      },
      {
        id: 2,
        titulo: "Vestido Lola fruncido",
        imagen: dress2,
        descripcion:
          "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        precio: 3000,
      },
      {
        id: 3,
        titulo: "Vestido Puket floral",
        imagen: dress3,
        descripcion:
          "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        precio: 3500,
      },
      {
        id: 4,
        titulo: "Vestido Camille con lunares",
        imagen: dress4,
        descripcion:
          "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        precio: 4000,
      },
    ];
     return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.filter(i => i.id === Number(id)))
      }, 2000);
    });
  } 

  useEffect(() => {
     console.log(`El id es ${id}`)
    getProduct(id)
      .then((response) => {
        setProduct(response[0]);
        console.log(response, "detail");
      })
      .catch((err) => console.log(err));

  }, [id]);

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


