import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCityTitle: "Armenia",
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSelectedCityTitle: (state, action) => {
      state.selectedCityTitle = action.payload;
    },
  },
});

export const { setSelectedCityTitle } = citySlice.actions;

export default citySlice.reducer;