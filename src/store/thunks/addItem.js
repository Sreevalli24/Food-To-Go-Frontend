import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const addItem = createAsyncThunk('items/add', async (item) => {
    
    const response = await axios.post(`${baseUrl}/api/items/add`,item);
    return response.data;
});

export {addItem};