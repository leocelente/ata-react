
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pautasReducer } from "../reducers";
import thunk from 'redux-thunk';

const reducers = combineReducers({ pautasReducer });

/**
 * Cria a Store e Registra o middleware com a store
 * @param {*} initialState estado global incial 
 */
function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));
    return store;
}

const store = configureStore();
export { configureStore, store };
