import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormDataStore } from '../../types/interfaces';

interface IFormDataState {
  formDataList: IFormDataStore[];
}

const initialState: IFormDataState = {
  formDataList: [],
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<IFormDataStore>) => {
      state.formDataList.push(action.payload);
    },
  },
});

export const { addFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
