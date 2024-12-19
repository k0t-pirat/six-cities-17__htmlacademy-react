import { SortItem } from './const';
import { Offer, OfferCard } from './types/offer';

const STARS_MULTIPLIER = 20;

export const getRatingInPercents = (rating: number) => `${Math.round(rating) * STARS_MULTIPLIER}%`;
export const upFirstLetter = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const getMapPoints = (offerCards: OfferCard[], mainOffer?: Offer) => {
  const mapPoints = offerCards.map(({id, city, location}) => ({id, city, location}));

  if (mainOffer) {
    return mapPoints .concat({
      id: mainOffer.id,
      city: mainOffer.city,
      location: mainOffer.location,
    });
  }

  return mapPoints;
};

const sortBy = {
  [SortItem.Popular]: (offerCards: OfferCard[]) => [...offerCards],
  [SortItem.PriceLow]: (offerCards: OfferCard[]) => [...offerCards].sort((leftCard, rightCard) => leftCard.price - rightCard.price),
  [SortItem.PriceHigh]: (offerCards: OfferCard[]) => [...offerCards].sort((leftCard, rightCard) => rightCard.price - leftCard.price),
  [SortItem.Rating]: (offerCards: OfferCard[]) => [...offerCards].sort((leftCard, rightCard) => rightCard.rating - leftCard.rating),
};

export const sortOffers = (offerCards: OfferCard[], sortType: SortItem) => sortBy[sortType](offerCards);
