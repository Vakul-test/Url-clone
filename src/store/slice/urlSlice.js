import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  urls: [],
  loading: false,
  error: null,
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrls: (state, action) => {
      state.urls = action.payload;
      state.loading = false;
      state.error = null;
    },
    addUrl: (state, action) => {
      state.urls.push(action.payload);
    },
    updateUrl: (state, action) => {
      const index = state.urls.findIndex(url => url._id === action.payload._id);
      if (index !== -1) {
        state.urls[index] = action.payload;
      }
    },
    deleteUrl: (state, action) => {
      state.urls = state.urls.filter(url => url._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { 
  setUrls, 
  addUrl, 
  updateUrl, 
  deleteUrl, 
  setLoading, 
  setError 
} = urlSlice.actions;

export default urlSlice.reducer;