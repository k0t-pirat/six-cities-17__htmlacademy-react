import { useState } from 'react';
import { OfferCard } from '../../types/offer';
import OffersEmpty from '../offers-empty';
import OffersList from '../offers-list';
import Map from '../map';

type CityInfoProps = {
  offerCards: OfferCard[];
}

const getMapPoints = (offersCards: OfferCard[]) => offersCards.map(({id, city, location}) => ({id, city, location}));

export default function CityInfo({offerCards}: CityInfoProps) {
  const [activeOfferId, setActiveOfferId] = useState('');
  const mapPoints = getMapPoints(offerCards);

  return (
    <div className="cities">
      <div className={`cities__places-container container${offerCards.length > 0 ? '' : ' cities__places-container--empty'}`}>
        {offerCards.length > 0 ? <OffersList offerCards={offerCards} setActiveOfferId={setActiveOfferId} /> : <OffersEmpty />}
        <div className="cities__right-section">
          {offerCards.length > 0 ? <Map mapPoints={mapPoints} activeOfferId={activeOfferId} /> : null}
        </div>
      </div>
    </div>
  );
}
