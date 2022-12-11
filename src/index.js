import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware,createStore } from 'redux';
import App from './containers/App';
import './index.css';
import reducers from './reducers';
import rootSaga from './sagas';
import { Provider } from 'react-redux';
// setting up store and middleware section for redux  saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

