import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import getInitialState from './state/initialState'

export default function configureStore(initialState = getInitialState()) {
 return createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk))
 );}