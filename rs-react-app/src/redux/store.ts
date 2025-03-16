import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './slices/FormDataSlice';
import countriesReducer from './slices/CountriesSlice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
    countries: countriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
