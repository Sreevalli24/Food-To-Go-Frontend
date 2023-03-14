import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const deleteItem = createAsyncThunk('items/remove', async (item) => {
  
    await axios.delete(`${baseUrl}/api/items/remove/${item.itemId}`);
    return item;
  });
  

export {deleteItem};