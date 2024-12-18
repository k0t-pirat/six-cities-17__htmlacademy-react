import CityInfo from '../../components/city-info';
import Locations from '../../components/locations';
import { useAppSelector } from '../../hooks';

const CURRENT_CITY = 'Amsterdam';

export default function MainPage() {
  const offerCards = useAppSelector((state) => state.offerCards);
  const cityOfferCards = offerCards.filter((offerCard) => offerCard.city.name === CURRENT_CITY);

  return (
    <main className={`page__main page__main--index${offerCards.length > 0 ? '' : ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Locations currentCity={CURRENT_CITY} />
      <CityInfo offerCards={cityOfferCards} />
    </main>
  );
}
