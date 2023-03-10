import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [],
    filter: '',
  },
  reducers: {
    addContactAction(state, action) {
      state.contact = action.payload;
    },
    deleteContactAction(state, action) {
      state.contact = state.contact.filter(c => c.id !== action.payload);
    },
    filterContactAction(state, action) {
      state.filter = action.payload;
     },
  },
});

console.log(contactSlice);

const persistConfig = {
  key: 'contact',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContactAction, deleteContactAction, filterContactAction } = contactSlice.actions;
