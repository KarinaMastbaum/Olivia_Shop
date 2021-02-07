import {useState, useEffect} from 'react';
import './reset.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FreeShipping from './components/general/FreeShipping/';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Error404 from './components/general/Error404';
import Cart from './components/Cart/index';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/general/Footer';
import {Store} from './store';
import {getFirestore} from './db/index';

function App() {


  const [data, setData] = useState({



    contador : 0,


    cart: [],

    items: [
      
    ],
    
    cantidad: 0,
    freeShipping: 4000,
    cuotas: 3,
  })


  useEffect(() => {
    
    const db = getFirestore();
    db.collection('productos').get()
    .then(docs => {
        let arr = [];
        docs.forEach(doc => {
            arr.push({id: doc.id, data: doc.data()})
        })

        setData({...data, items: arr});
    })
    .catch(e => console.log(e));
    },[] )

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
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/:category_name">
            <Category />
          </Route>
          <Route exact path="/:category_name/:id">
            <Detail />
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
