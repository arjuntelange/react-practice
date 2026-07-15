import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  return data;
});

const quoteSlice = createSlice({
  name: "quote",

  initialState: {
    quote: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export default quoteSlice.reducer;
