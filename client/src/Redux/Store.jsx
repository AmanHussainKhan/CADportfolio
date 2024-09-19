import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice';
const store = configureStore({
    // we put reducer here
    // and reducer ke andar actions hote
    reducer:{
        cart:cartReducer
    }
})

export default store;