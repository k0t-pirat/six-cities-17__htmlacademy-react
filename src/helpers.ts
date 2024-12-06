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
