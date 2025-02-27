import { memo } from 'react';
import { sortOffers } from '../../helpers';
import { useAppSelector } from '../../hooks';
import { OfferCard as TOfferCard } from '../../types/offer';
import OfferCard from '../offer-card';
import Sorting from '../sorting';
import { getCurrentSort } from '../../store/app-process/selectors';

type OffersListProps = {
  offerCards: TOfferCard[];
  setActiveOfferId: (id: string) => void;
  currentCity: string;
}

function OffersListTemplate({offerCards, setActiveOfferId, currentCity}: OffersListProps) {
  const currentSort = useAppSelector(getCurrentSort);
  const sortedOfferCards = sortOffers(offerCards, currentSort);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCards.length} places to stay in {currentCity}</b>
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
        {sortedOfferCards.map((offerCard) => (
          <OfferCard key={offerCard.id} offerCard={offerCard} className="cities" setActiveOfferId={setActiveOfferId} />
        ))}
      </div>
    </section>
  );
}

const OffersList = memo(OffersListTemplate);
export default OffersList;
