import { FavoritesByCity, OfferCard } from '../../types/offer';

export const getFavoritesByCity = (favoriteOfferCards: OfferCard[]) => {
  const favoritesByCity: FavoritesByCity = {};

  for (const card of favoriteOfferCards) {
    if (!favoritesByCity[card.city.name]) {
      favoritesByCity[card.city.name] = [];
    }
    favoritesByCity[card.city.name].push(card);
  }

  return favoritesByCity;
};
