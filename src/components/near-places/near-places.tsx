import { OfferCard as TOfferCard } from '../../types/offer';
import OfferCard from '../offer-card';

type NearPlacesProps = {
  nearOfferCards: TOfferCard[];
}

export default function NearPlaces({nearOfferCards}: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOfferCards.map((card) => (
          <OfferCard key={card.id} offerCard={card} className="near-places"/>
        ))}
      </div>
    </section>
  );
}
