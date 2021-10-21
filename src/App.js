import './App.css';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/productlist" exact component={ProductList}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
