import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResultItem } from '../../interfaces/interfaces';

const initialState: IResultItem[] = [];

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    toggleSelectedItems: (
      state,
      { payload: result }: PayloadAction<IResultItem>
    ) => {
      const isSelected = state.some((item) => item.url === result.url);

      if (isSelected) {
        const url = state.findIndex((item) => item.url === result.url);

        if (url !== -1) {
          state.splice(url, 1);
        }
      } else {
        state.push(result);
      }
    },
    unselectAll: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { actions, reducer } = selectedItemsSlice;
