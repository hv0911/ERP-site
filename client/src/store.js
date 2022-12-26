import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './reducers/Product'

const store = configureStore({
    reducer:{
        Product:ProductReducer
    }
});

export default store;