import { AuthorizarionStatus } from '../../const';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { Review } from '../../types/review';
import ReviewForm from '../review-form';
import ReviewItem from '../review-item';

type ReviewsListProps = {
  reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListProps) {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      {authorizationStatus === AuthorizarionStatus.Auth ? <ReviewForm /> : null}
    </section>
  );
}
