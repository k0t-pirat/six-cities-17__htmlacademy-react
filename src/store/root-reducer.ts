import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './user-data/user-data';
import { reviewData } from './review-data/review-data';
import { offerData } from './offer-data/offer-data';
import { mainData } from './main-data/main-data';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.CurrentOffer]: offerData.reducer,
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.App]: appProcess.reducer,
});
