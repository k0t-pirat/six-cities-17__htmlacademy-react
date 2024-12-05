import { OfferCard } from '../../types/offer';
import FavoritesEmpty from '../../components/favorites-empty';
import FavoritesByCity from '../../components/favorites-by-city';
import { getFavoritesByCity } from './util';

type FavoritesPageProps = {
  favoriteOfferCards: OfferCard[];
}

export default function FavoritesPage({favoriteOfferCards}: FavoritesPageProps) {
  const favoritesByCity = getFavoritesByCity(favoriteOfferCards);

  return (
    <main className={`page__main page__main--favorites${favoriteOfferCards.length > 0 ? '' : ' page__main--favorites-empty'}`}>
      <div className="page__favorites-container container">
        {favoriteOfferCards.length > 0 ?
          <FavoritesByCity favoritesByCity={favoritesByCity} /> :
          <FavoritesEmpty />}
      </div>
    </main>
  );
}
