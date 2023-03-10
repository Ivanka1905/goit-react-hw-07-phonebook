import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from './service/getContacts';
import { deleteContactsThunk } from './service/deleteContacts';
import { postContactsThunk } from './service/postContacts';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContactAction(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContactsThunk.pending](state, _) {
      state.contact.isLoading = true;
    },
    [getContactsThunk.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = action.payload;
    },
    [getContactsThunk.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
    [postContactsThunk.pending](state, _) {
      state.contact.isLoading = true;
    },
    [postContactsThunk.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = [...state.contact.items, action.payload];
    },
    [postContactsThunk.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
    [deleteContactsThunk.pending](state, _) {
      state.contact.isLoading = true;
    },
    [deleteContactsThunk.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = state.contact.items.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    [deleteContactsThunk.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
  },
});

export const { filterContactAction } = contactSlice.actions;
