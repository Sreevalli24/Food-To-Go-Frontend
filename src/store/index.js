import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './slices/itemSlice';
import { restaurantReducer } from './slices/restaurantSlice';

export const store = configureStore({
    
    reducer: {
        item : itemReducer,
        restaurant : restaurantReducer
        },
});

export * from './thunks/fetchItem';
export * from './thunks/addItem';
export * from './thunks/deleteItem';
export * from './thunks/editItem';
export * from './thunks/fetchRestaurants';