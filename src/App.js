import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'

import './pages/homepage/homepage.styles.scss'
import './App.css';

import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Link to='/'> Home </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
    // <HomePage />
  );
}

export default App;
