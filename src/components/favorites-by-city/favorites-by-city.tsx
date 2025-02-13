import { FavoritesByCity as TFavoritesByCity } from '../../types/offer';
import OfferCard from '../offer-card';
import LocationItem from '../location-item';

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
              <LocationItem cityName={cityName} />
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
