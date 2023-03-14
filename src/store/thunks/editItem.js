import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const editItem = createAsyncThunk("items/editItem", async (item) => {

    const response = await axios.post(`${baseUrl}/api/items/update/${item.itemId}`);
    return response.data;
});
const getItemDetailsById = createAsyncThunk("items/itemDetails", async (itemId) => {
    
    const response = await axios.get(`${baseUrl}/api/items/view/${itemId}`);
    return response.data;
});

export { editItem, getItemDetailsById };