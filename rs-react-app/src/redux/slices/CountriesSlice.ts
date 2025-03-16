import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../constants/countries';

const initialState = {
  countriesList: [...countries],
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
