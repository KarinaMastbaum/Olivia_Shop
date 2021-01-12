import {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import '../ItemProduct/';
import dress1 from '../../../images/dress1.jpg';
import dress2 from '../../../images/dress2.jpg';
import dress3 from '../../../images/dress3.jpg';
import dress4 from '../../../images/dress4.jpg';

const Item = () => {
   
    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve( [
                {
                    id: 1,
                    titulo: "Vestido Naomi floral",
                    imagen: dress1,
                    descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
                    precio: 2500
                },
                {
                    id: 2,
                    titulo: "Vestido Lola fruncido",
                    imagen: dress2,
                    descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
                    precio: 3000,
                },
                {
                    id: 3,
                    titulo: "Vestido Puket floral",
                    imagen: dress3,
                    descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
                    precio: 3500,
                },
                {
                    id: 4,
                    titulo: "Vestido Camille con lunares",
                    imagen: dress4,
                    descripcion: "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
                    precio: 4000,
                },
            ]
        );
        }, 2000)
    })

    const getProductsItem = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProductsItem();

    }, [])


    return (
        <section className="products">
                {
                    items.length ?
                    <>
                        <h2 className="destacados">Productos destacados</h2>
                        <div className="container">
                            <ul className="contenedor">
                              {
                                  items.map((item) => (
                                      <li className ="item" 
                                          key={item.id} >
                                          <ProductCard
                                          titulo={item.titulo}    
                                          imagen={item.imagen}
                                          descripcion={item.descripcion}
                                          precio={item.precio}
                                          id={item.id}
                                          />
                                      </li>
                                  ))
                              }
                            </ul>
                        </div>
                    </> :
                    <p className="cargando">Cargando productos...</p>
                }
        </section>
    )
}

export default Item;