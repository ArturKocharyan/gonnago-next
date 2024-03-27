import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCityTitle: "Armenia",
  selectedCity:"Armenia"
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSelectedCityTitle: (state, action) => {
      state.selectedCityTitle = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    }
  },
});

export const { setSelectedCityTitle, setSelectedCity } = citySlice.actions;

export default citySlice.reducer;