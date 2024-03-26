import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CITIES_URL = 'https://api.gonnago.am/cities';

export const getCities = createAsyncThunk(
    "citiesList/getCities", 
    async () => {
      const response = await axios.get(CITIES_URL);
      return response.data;
    });

    const initialState = {
      cities: [],
      status: 'idle',
      error: null,
    };
  const citiesSlice = createSlice({
    name: "citiesList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getCities.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCities.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.cities = action.payload;
        })
        .addCase(getCities.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const selectAllCities = (state) => state.cities.rockets;
  export const getCitiesStatus = (state) => state.cities.status;
  export const getCitiesError = (state) => state.cities.error;
  
  export default citiesSlice.reducer;