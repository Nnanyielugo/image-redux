import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers/resultReducer';
import thunk from 'redux-thunk';

import routes from './routes';
import passport_valid_reducer from './reducers/passport_valid_reducer';
import configureStore from './store/store';
import { facesMatch, facesNotMatch, failedVerification } from './actions/actions';

// connect reducer to store
const middleware = [thunk]
const store = createStore(passport_valid_reducer, applyMiddleware(...middleware))

store.dispatch(facesMatch())
store.dispatch(facesNotMatch())
store.dispatch(failedVerification())

const app = document.getElementById('root');

// wrap app in provider from react-redux passing into its store, the store of the application's state
ReactDOM.render(<Provider store={store}><Router routes={routes} history={browserHistory}/></Provider>, app); 