import {useState} from 'react';
import './reset.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FreeShipping from './components/general/FreeShipping/';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Error404 from './components/general/Error404';
import Cart from './components/Cart/index';
import Checkout from './components/Checkout';
import Footer from './components/general/Footer';
import {Store} from './store';

function App() {
  const [data, setData] = useState({

    onAdd(sign, contador, setContador, max, min){
      if ( ( sign === '+' && contador <= max) ) setContador(contador+1)
      else if ( (sign === '-' && contador > min) ) setContador(contador-1);
    },


    cart: [],

    items: [
      {
        "_id": 1,
        "category": "Ropa",
        "title": "Vestido Naomi",
        "image": "dress1.jpg",
        "description": "Vestido Naomi ideal para dia y noche",
        "availableSize": ["XL", "L", "M", "S"],
        "price": 2500, 
        "cantidad": 1
        },
        {
          "_id": 2,
          "category": "Zapatos",
          "image": "zapatos2.jpg",
          "title": "Zapatos de cuero color negro, super comodos",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS", "X", "M", "L"],
          "price": 3000
        },
        {
          "_id": 3,
          "category": "Accesorios",
          "image": "dress3.jpg",
          "title": "Mochila de cuero color Marron, perfecta para todos los dias",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["X", "M", "L", "XXL"],
          "price": 3500
        },
        {
          "_id": 4,
          "category": "Zapatos",
          "image": "zapatos1.jpg",
          "title": "Zapatos de cuero color Nude, super comodos",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XL", "XXL"],
          "price": 4000
        },
        {
          "_id": 5,
          "category": "Ropa",
          "image": "dress2.jpg",
          "title": "Vestido Sunset con Lunares amarillos",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["X", "L", "XL"],
          "price": 5500
        },
        {
          "_id": 6,
          "category": "Accesorios",
          "image": "accesorio2.jpg",
          "title": "Mochila de cuero color negro, perfecta para todos los dias",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 2200
        }
    ],
    cantidad: 0,
    freeShipping: 4000,
    cuotas: 3,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavAndWidgetCart />
        <FreeShipping />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/:category_name">
            <Category />
          </Route>
          <Route exact path="/:category_name/:id">
            <Detail />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
