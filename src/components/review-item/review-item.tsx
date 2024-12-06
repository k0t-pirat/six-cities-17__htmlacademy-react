import { getRatingInPercents } from '../../helpers';
import { Review } from '../../types/review';
import { DateFormatType, formatDate } from './util';

type ReviewItemProps = {
  review: Review;
}

export default function ReviewItem({review}: ReviewItemProps) {
  const {user, rating, comment, date} = review;

  return (
    <li className="reviews__item">
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
  );
}
