import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getApiContacts = axios.create({
    baseURL: 'https://640aa14365d3a01f98036b31.mockapi.io/',
    method: 'get',
})
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await getApiContacts.get('contacts')
            return response.data;
        } catch (error){ return thunkAPI.rejectWithValue(error)}
    }
)