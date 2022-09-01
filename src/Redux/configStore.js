import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import getMovies from './movies';

const rootReducer = combineReducers({ movies: getMovies });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

store.subscribe(() => {
//   console.log('Store changed ! ', store.getState());
});
export default store;
