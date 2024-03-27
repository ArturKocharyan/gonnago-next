import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import citiesSlice from "./slices/citiesSlice";
import citySlice from "./slices/citySlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice,
        cities: citiesSlice,
        city: citySlice
    }
}) 