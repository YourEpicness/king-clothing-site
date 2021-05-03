// used to create our store to pass states in and middleware to grab values
import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export variable to use
export default store;
