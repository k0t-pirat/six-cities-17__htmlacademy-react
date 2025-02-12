import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getReviews = (state: State) => state[NameSpace.Review].reviews;
export const getReviewsUploadStatus = (state: State) => state[NameSpace.Review].reviewsUploadStatus;
