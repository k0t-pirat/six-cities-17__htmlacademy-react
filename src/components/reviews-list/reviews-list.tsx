import { AuthorizarionStatus } from '../../const';
import { getRatingInPercents } from '../../helpers';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { Review } from '../../types/review';
import ReviewForm from '../review-form';
import { DateFormatType, formatDate } from './util';

type ReviewsListProps = {
  reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListProps) {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map(({id, user, rating, comment, date}) => (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRatingInPercents(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment}</p>
              <time className="reviews__time" dateTime={formatDate(date, DateFormatType.Attribue)}>
                {formatDate(date, DateFormatType.Value)}
              </time>
            </div>
          </li>
        ))}
      </ul>
      {authorizationStatus === AuthorizarionStatus.Auth ? <ReviewForm /> : null}
    </section>
  );
}
