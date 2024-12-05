import { useState } from 'react';
import { OfferCard } from '../../types/offer';
import OffersEmpty from '../offers-empty';
import OffersList from '../offers-list';
import Map from '../map';

type CityInfoProps = {
  offerCards: OfferCard[];
}

export default function CityInfo({offerCards}: CityInfoProps) {
  const [activeCardId, setActiveCardId] = useState('');
  //eslint-disable-next-line no-console
  console.log('activeCardId', activeCardId);

  return (
    <div className="cities">
      <div className={`cities__places-container container${offerCards.length > 0 ? '' : ' cities__places-container--empty'}`}>
        {offerCards.length > 0 ? <OffersList offerCards={offerCards} setActiveCardId={setActiveCardId} /> : <OffersEmpty />}
        <div className="cities__right-section">
          {offerCards.length > 0 ? <Map /> : null}
        </div>
      </div>
    </div>
  );
}
