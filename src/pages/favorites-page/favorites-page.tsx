import FavoritesEmpty from '../../components/favorites-empty';
import FavoritesByCity from '../../components/favorites-by-city';
import { getFavoritesByCity } from './util';
import { useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesLoading } from '../../store/favorite-data/selectors';
import Spinner from '../../components/spinner';

export default function FavoritesPage() {
  const areFavoritesLoading = useAppSelector(getFavoritesLoading);
  const favoriteOfferCards = useAppSelector(getFavorites);
  const favoritesByCity = getFavoritesByCity(favoriteOfferCards);

  if (areFavoritesLoading) {
    return <Spinner />;
  }

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
