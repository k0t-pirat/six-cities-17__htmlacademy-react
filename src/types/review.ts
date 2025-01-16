import { User } from './user';

type ReviewPayload = {
  comment: string;
  rating: number;
}

export type Review = ReviewPayload & {
  id: string;
  date: string;
  user: User;
}

export type UploadReveiwData = {
  offerId: string;
  reviewPayload: ReviewPayload;
}
