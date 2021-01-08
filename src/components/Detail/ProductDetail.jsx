import './ProductDetail.css';

const ProductDetail = ({item}) => {

    const handleClickAdd = (e) => {
        alert('Producto agregado al carrito');
    }

    return (
        <article>
            <div className="container">
            <h1 className="titulo">{item.titulo}</h1>
                <img  className="imagen" src={item.imagen} alt="dress"/>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">${item.precio}</p>
                    <button className="botonProductItem"  onClick={handleClickAdd}>Agregar al Carrito</button>
                </div>
        </article> 
    )
}

export default ProductDetail;
