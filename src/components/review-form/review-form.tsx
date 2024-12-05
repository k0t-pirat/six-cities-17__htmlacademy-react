import { Fragment, useState } from 'react';

const RATING_NUMBERS = [5, 4, 3, 2, 1];

export default function ReviewForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_NUMBERS.map((number) => (
          <Fragment key={number}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={number}
              id={`${number}-stars`}
              type="radio"
              checked={number === rating}
              onChange={(evt) => {
                setRating(Number(evt.target.value));
              }}
            />
            <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
