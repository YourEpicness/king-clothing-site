// used to create our store to pass states in and middleware to grab values
import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// used to persist the redux store
export const persistor = persistStore(store);

// export variable to use
export default {store, persistor};
