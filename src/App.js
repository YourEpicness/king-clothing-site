import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'
import './App.css';

import {Route, Switch, Link} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
)


function App(props) {
  return (
    <div>
    <Link to='/'> Home </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
    // <HomePage />
  );
}

export default App;
