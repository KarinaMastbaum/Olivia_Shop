import {useState, useEffect, useContext} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import '../ItemProduct/';
import {Store} from '../../../store/index';

const Item = () => {
   
    const [items, setItems] = useState([]);
    const [data, setData] = useContext(Store);

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve( 
                data.items
        );
        }, 2000)
    })

    const getProductsItem = async () => {
        try {
            const result = await getProducts;
            console.log(result)
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
                                          key={items.id} >
                                          <ProductCard
                                          titulo={item.titulo}    
                                          imagen={item.image}
                                          descripcion={item.descripcion}
                                          precio={item.precio}
                                          id={item._id}
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