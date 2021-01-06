import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        Ropa  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Zapatos 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Accesorios 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;