import { OfferCard as TOfferCard } from '../../types/offer';
import OfferCard from '../offer-card';
import Sorting from '../sorting';

type OffersListProps = {
  offerCards: TOfferCard[];
  setActiveOfferId: (id: string) => void;
  currentCity: string;
}

export default function OffersList({offerCards, setActiveOfferId, currentCity}: OffersListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCards.length} places to stay in {currentCity}</b>
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
        {offerCards.map((offerCard) => (
          <OfferCard key={offerCard.id} offerCard={offerCard} className="cities" setActiveOfferId={setActiveOfferId} />
        ))}
      </div>
    </section>
  );
}
