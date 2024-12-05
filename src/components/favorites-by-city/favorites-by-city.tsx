import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FavoritesByCity as TFavoritesByCity } from '../../types/offer';
import OfferCard from '../offer-card';

type FavoritesByCityProps = {
  favoritesByCity: TFavoritesByCity;
}

export default function FavoritesByCity({favoritesByCity}: FavoritesByCityProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoritesByCity).map(([cityName, offerCards]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to={AppRoute.Root} className="locations__item-link">
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offerCards.map((card) => (
                <OfferCard key={card.id} offerCard={card} className="favorites" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
