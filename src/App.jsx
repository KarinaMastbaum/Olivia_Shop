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
          "title": "Mochila Paris",
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
          "title": "Mochila Roma",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 2200
        },
        {
          "_id": 7,
          "category": "Ropa",
          "image": "dress4.jpg",
          "title": "Vestido Holly con Lunares blancos",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["X", "L", "XL"],
          "price": 5500 
        },
        {
          "_id": 8,
          "category": "Accesorios",
          "image": "accesorio3.jpg",
          "title": "Cinturon Malaga",
          "description": "Un cinturon de cuero que complementa bien con cualquier outfit",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 1500
        },
        {
          "_id": 9,
          "category": "Accesorios",
          "image": "accesorio4.jpg",
          "title": "Cinturon Rustic",
          "description": "Un cinturon rustico que complementa bien con cualquier outfit",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 1800
        },
        {
          "_id": 10,
          "category": "Accesorios",
          "image": "accesorio5.jpg",
          "title": "Vincha Rose",
          "description": "Una vincha que viste y complementa perfecto a cualquier hora",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 800
        },
        {
          "_id": 11,
          "category": "Accesorios",
          "image": "accesorio6.jpg",
          "title": "Vincha Ruby",
          "description": "Una vincha clasica complementa perfecto",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 850
        },
        {
          "_id": 12,
          "category": "Zapatos",
          "image": "zapatos3.jpg",
          "title": "Zapatilla Lola",
          "description": "Zapatilla de Cuero, divinas y comodas",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 4800
        },
        {
          "_id": 13,
          "category": "Zapatos",
          "image": "zapatos4.jpg",
          "title": "Sandalia Malibú",
          "description": "Sandalia de cuero comoda y perfecta para todo el dia",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 4600
        },
        {
          "_id": 14,
          "category": "Zapatos",
          "image": "zapatos5.jpg",
          "title": "Sandalia Lucy",
          "description": "Sandalia de cuero comoda y perfecta para todo el dia",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 5200
        },
        {
          "_id": 15,
          "category": "Zapatos",
          "image": "zapatos6.jpg",
          "title": "Zapatilla Snow",
          "description": "Zapatilla de cuero, super combinable y comoda para todo uso",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 3800
        },
        {
          "_id": 16,
          "category": "Ropa",
          "image": "dress.jpg",
          "title": "Vestido Florence",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 2700
        },
        {
          "_id": 17,
          "category": "Ropa",
          "image": "dress5.jpg",
          "title": "Vestido Yasmin",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 4000
        },
        {
          "_id": 18,
          "category": "Ropa",
          "image": "dress6.jpg",
          "title": "Vestido Sky",
          "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
          "availableSizes": ["XS","X", "L", "XL"],
          "price": 4200
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
