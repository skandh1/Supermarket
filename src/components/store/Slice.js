import React from "react";
import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    products: []
}

export const Slice = createSlice({
    name:'bag',
    initialState,
    reducers: {
       
        addProduct: (state,action)=>{
            
            state.products.push(action.payload)
        },

        removeProduct: (state,action)=>{
            state.products = state.products.filter((product)=>product.id!==action.payload)
        }

    }
})

export default Slice.reducer
export const {addProduct,removeProduct} = Slice.actions