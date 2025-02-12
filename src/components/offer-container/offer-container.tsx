import { PropsWithChildren } from 'react';
import { MapPoint, Offer } from '../../types/offer';
import FavoriteButton from '../favorite-button';
import { getRatingInPercents } from '../../helpers';
import Map from '../map';

type OfferContainerProps = {
  currentOffer: Offer;
  mapPoints: MapPoint[];
}

const MAX_IMAGES_COUNT = 6;

export default function OfferContainer({currentOffer, mapPoints, children}: PropsWithChildren<OfferContainerProps>) {
  const {id: offerId, images, isPremium, title, rating, bedrooms, maxAdults, price, goods, host, description} = currentOffer;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, MAX_IMAGES_COUNT).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium ? (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <FavoriteButton offerId={offerId} className="offer" />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: getRatingInPercents(rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
                  Apartment
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((item) => (
                <li key={item} className="offer__inside-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={`offer__avatar-wrapper${host.isPro ? ' offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">{host.name}</span>
              {host.isPro ? (
                <span className="offer__user-status">
                      Pro
                </span>
              ) : null}
            </div>
            <div className="offer__description">
              <p className="offer__text">{description}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
      <Map mapPoints={mapPoints} activeOfferId={currentOffer.id} className="offer" />
    </section>
  );
}
