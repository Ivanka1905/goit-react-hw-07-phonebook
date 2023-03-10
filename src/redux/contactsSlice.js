import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './service/getContacts';
import { deleteContact } from './service/deleteContacts';
import { addContact } from './service/postContacts';

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
    [fetchContacts.pending](state, _) {
      state.contact.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
    [addContact.pending](state, _) {
      state.contact.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = [...state.contact.items, action.payload];
    },
    [addContact.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
    [deleteContact.pending](state, _) {
      state.contact.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = state.contact.items.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contact.isLoading = false;
      state.contact.items = action.payload;
      state.contact.error = action.payload;
    },
  },
});

export const { filterContactAction } = contactSlice.actions;
