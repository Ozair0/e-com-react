import {createStore, applyMiddleware, compose} from "redux";
// import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

// For DEV
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;