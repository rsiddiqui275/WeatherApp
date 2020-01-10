import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer';
import { rootSaga } from './saga/mySaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const devToolEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

const composeEnhancers = devToolEnhancer || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;