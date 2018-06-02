import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import history from '../history';
import reducers from './reducers';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history));

const store = createStore(reducers, composeWithDevTools(enhancer));

sagaMiddleware.run(saga);

export default store;
