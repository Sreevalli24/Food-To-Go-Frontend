import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const fetchItem = createAsyncThunk('items/viewall', async () => {
  
    const response = await axios.get(`${baseUrl}/api/items/viewall`);

    return response.data;
  });
  

export {fetchItem};