import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MENU_URL = 'https://api.gonnago.am/categories/menu';

export const getMenu = createAsyncThunk(
    "menuList/getMenu", 
    async () => {
      const response = await axios.get(MENU_URL);
      return response.data;
    });

    const initialState = {
      menu: [],
      status: 'idle',
      error: null,
    };
  const menuSlice = createSlice({
    name: "menuList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMenu.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getMenu.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.menu = action.payload;
        })
        .addCase(getMenu.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const selectAllMenu = (state) => state.menu.rockets;
  export const getMenuStatus = (state) => state.menu.status;
  export const getMenuError = (state) => state.menu.error;
  
  export default menuSlice.reducer;