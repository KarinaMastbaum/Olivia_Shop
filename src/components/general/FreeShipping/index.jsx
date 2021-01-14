import {useContext} from 'react';
import './FreeShipping.css';
import {Store} from '../../../store';

const FreeShipping = () => {

    const [data, setData] = useContext(Store);

    return (
        <div className="envios">
            <h2 className="parrafoEnvios">ENVÍOS GRATIS A TODA LA REPÚBLICA ARGENTINA DESDE ${data.freeShipping} EN {data.cuotas} cuotas sin interés</h2>
        </div>  
    )
}

export default FreeShipping;