// used to create our store to pass states in and middleware to grab values
import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

// redux saga imports
// import {fetchCollectionsStart} from './shop/shop.sagas';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

// pass any middlewares in the array
const middlewares = [sagaMiddleware];

// changing middleware to run only in development

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
// used to persist the redux store
export const persistor = persistStore(store);

// export variable to use
export default {store, persistor};
