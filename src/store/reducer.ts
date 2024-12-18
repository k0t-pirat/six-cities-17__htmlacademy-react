import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';

const initialState = {
  currentCity: CITIES[0],
};

export const reducer = createReducer(initialState, () => {

});
