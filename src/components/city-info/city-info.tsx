import { useMemo, useState } from 'react';
import { OfferCard } from '../../types/offer';
import OffersEmpty from '../offers-empty';
import OffersList from '../offers-list';
import Map from '../map';
import { getMapPoints } from '../../helpers';

type CityInfoProps = {
  offerCards: OfferCard[];
  currentCity: string;
}

export default function CityInfo({offerCards, currentCity}: CityInfoProps) {
  const [activeOfferId, setActiveOfferId] = useState('');
  const mapPoints = useMemo(() => getMapPoints(offerCards), [offerCards]);

  return (
    <div className="cities">
      <div className={`cities__places-container container${offerCards.length > 0 ? '' : ' cities__places-container--empty'}`}>
        {offerCards.length > 0 ?
          <OffersList offerCards={offerCards} setActiveOfferId={setActiveOfferId} currentCity={currentCity} /> :
          <OffersEmpty currentCity={currentCity} />}
        <div className="cities__right-section">
          {mapPoints.length > 0 ? <Map mapPoints={mapPoints} activeOfferId={activeOfferId} className="cities" /> : null}
        </div>
      </div>
    </div>
  );
}
