import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../thunks/fetchRestaurants';

const restaurantSlice = createSlice({
    name : "restaurant" ,
    initialState : {
        data : [],
        isLoading : false,
        error : null ,
    },
    extraReducers(builder){

        builder.addCase(fetchRestaurants.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRestaurants.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchRestaurants.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const restaurantReducer = restaurantSlice.reducer;