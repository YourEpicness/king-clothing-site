import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import './pages/homepage/homepage.styles.scss';
import './App.css';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // checking if they are signing in
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
              console.log(this.state);
          });
        });
      }

      else(this.setState({currentUser:userAuth}));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}  />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInandSignUpPage} />
      </Switch>
    </div>
    // <HomePage />
  );
}
}

export default App;
