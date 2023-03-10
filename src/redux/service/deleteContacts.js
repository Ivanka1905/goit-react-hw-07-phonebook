import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const deleteApiContacts = axios.create({
  baseURL: 'https://640aa14365d3a01f98036b31.mockapi.io/',
  method: 'delete',
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteApiContacts.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
