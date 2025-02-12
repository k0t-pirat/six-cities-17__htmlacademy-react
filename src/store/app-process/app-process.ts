import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SortItem } from '../../const';

const initialState = {
  currentCity: CITIES[3],
  currentSort: SortItem.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    changeSorting: (state, action: PayloadAction<SortItem>) => {
      state.currentSort = action.payload;
    },
  },
});

export const {changeCity, changeSorting} = appProcess.actions;
