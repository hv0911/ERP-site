import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const ProductReducer = createReducer( initialState , {   

    createProductRequest:(state)=>{
        state.loading = true
    },
    createProductSuccess:(state , action)=>{
        state.loading = false,
        state.product = action.payload
    },
    createProductFailure:(state , action ) => {
        state.loading = false,
        state.error = action.payload

    } ,





    ProductListRequest:(state)=>{
        state.loading = true ;
    },

    ProductListSuccess:(state,action)=>{
        state.loading = false,
        state.products = action.payload
    } ,

    ProductListFailure:(state , action) =>{
        state.loading = false,
        state.error = action.payload
    },

} )