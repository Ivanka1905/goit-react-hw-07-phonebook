import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const postApiContacts = axios.create({
    baseURL: 'https://640aa14365d3a01f98036b31.mockapi.io/',
    method: 'post',
})
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await postApiContacts.post('contacts', contact)
            return response.data;
        } catch (error){ return thunkAPI.rejectWithValue(error)}
    }
)