import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const fetchRestaurants = createAsyncThunk('restaurant/viewall', async () => {
    
    const response = await axios.get(`${baseUrl}/api/restaurant/viewall`);

    return response.data;
  });
  

export {fetchRestaurants};