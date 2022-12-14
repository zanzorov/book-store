import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genreId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenreId(state, action) {
      state.genreId = action.payload;
    },
  },
});

export const { setGenreId } = filterSlice.actions;

export default filterSlice.reducer;
