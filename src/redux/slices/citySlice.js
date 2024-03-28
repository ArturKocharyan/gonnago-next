import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCityTitle: "Armenia",
  selectedCity:"Armenia",
  selectedMenu:'entertainment'
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
    },
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload
    }
  },
});

export const { setSelectedCityTitle, setSelectedCity, setSelectedMenu } = citySlice.actions;

export default citySlice.reducer;