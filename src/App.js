import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';

import './pages/homepage/homepage.styles.scss';
import './App.css';

// import {auth, createUserProfileDocument/*, addCollectionAndDocuments*/} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
// import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';

import styled from 'styled-components';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession();
    
    // const {setCurrentUser /*, collectionsArray*/} = this.props;


    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   // checking if they are signing in
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //     );
    //     });
    //   }
    //
    //   else(setCurrentUser(userAuth));
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInandSignUpPage />)} />
      </Switch>
    </div>
    // <HomePage />
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser /*,
  collectionsArray: selectCollectionsForPreview */
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
