import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchReviews, uploadReview } from '../api-actions';
import { Review } from '../../types/review';

const initialState = {
  reviews: [] as Review[],
  reviewsUploadStatus: RequestStatus.Idle,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(uploadReview.pending, (state) => {
        state.reviewsUploadStatus = RequestStatus.Uploading;
      })
      .addCase(uploadReview.fulfilled, (state, action) => {
        state.reviewsUploadStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(uploadReview.rejected, (state) => {
        state.reviewsUploadStatus = RequestStatus.Error;
      });
  },
});

