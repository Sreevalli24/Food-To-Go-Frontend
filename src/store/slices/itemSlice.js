import { createSlice } from '@reduxjs/toolkit';
import { fetchItem } from '../thunks/fetchItem';
import { addItem } from '../thunks/addItem';
import { deleteItem } from '../thunks/deleteItem';
import { editItem, getItemDetailsById } from '../thunks/editItem';

const itemSlice = createSlice({
    name : "item" ,
    initialState : {
        data : [],
        isLoading : false,
        error : null ,
    },
    extraReducers(builder){

    
        builder.addCase(fetchItem.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchItem.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchItem.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });


        builder.addCase(addItem.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addItem.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addItem.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });


         builder.addCase(deleteItem.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteItem.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = state.data.filter(item => {
                return item.itemtId !== action.payload.itemId
            });
        });
        builder.addCase(deleteItem.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(editItem.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(editItem.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = state.data.filter(item => {
                return item.itemtId !== action.payload.itemId
            });
        });
        builder.addCase(editItem.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(getItemDetailsById.fulfilled, (state, action) => {
            state.data = action.payload;
        });

    },
});

export const itemReducer = itemSlice.reducer;