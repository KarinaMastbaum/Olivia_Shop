import {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import '../ItemProduct/';
// import {Store} from '../../../store/index';
import {getFirestore} from '../../../db/index';

const Item = () => {
   
    const [items, setItems] = useState([]);
    // const [data, setData] = useContext(Store);
    const db = getFirestore();


    const getProducstItem= () => {
        db.collection('productos').get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

    }
    
    useEffect(() => {
        getProducstItem();


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
                                         titulo={item.data.title}
                                         imagen={item.data.image}
                                         descripcion={item.data.description}
                                         precio={item.data.price}
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