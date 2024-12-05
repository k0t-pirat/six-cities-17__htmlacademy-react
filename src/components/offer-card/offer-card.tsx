import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferCard as TOfferCard } from '../../types/offer';
import FavoriteButton from '../favorite-button';
import { getRatingInPercents, upFirstLetter } from '../../helpers';

type OfferCardProps = {
  offerCard: TOfferCard;
  className: string;
  setActiveCardId?: (id: string) => void;
}

export default function OfferCard({offerCard, className, setActiveCardId}: OfferCardProps) {
  const {isPremium, previewImage, price, isFavorite, rating, title, type} = offerCard;

  const imageWidth = className === 'favorites' ? '150' : '260';
  const imageHeight = className === 'favorites' ? '110' : '200';

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={setActiveCardId && (() => setActiveCardId(offerCard.id))}
      onMouseLeave={setActiveCardId && (() => setActiveCardId(''))}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`place-card__info${className === 'favorites' ? ' favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercents(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}
