import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { uploadReview } from '../../store/api-actions';
import { RequestStatus } from '../../const';
import { setReviewUploadStatus } from '../../store/action';

const RATING_NUMBERS = [5, 4, 3, 2, 1];
const TextLength = {
  Min: 50,
  Max: 300
};

type ReviewFormProps = {
  offerId: string;
}

export default function ReviewForm({offerId}: ReviewFormProps) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();
  const reviewUploadStatus = useAppSelector((state) => state.reviewUploadStatus);

  const isFormActive = text.length >= TextLength.Min && text.length < TextLength.Max && rating > 0 && reviewUploadStatus !== RequestStatus.Uploading;

  useEffect(() => {
    if (reviewUploadStatus === RequestStatus.Success) {
      setText('');
      setRating(0);
      dispatch(setReviewUploadStatus(RequestStatus.Idle));
    }
  }, [reviewUploadStatus, dispatch]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(uploadReview({
          offerId,
          reviewPayload: {rating, comment: text}
        }));
      }}
    >
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
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount"> {TextLength.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormActive}>Submit</button>
      </div>
    </form>
  );
}
