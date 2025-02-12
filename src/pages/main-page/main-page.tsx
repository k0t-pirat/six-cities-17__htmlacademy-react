import CityInfo from '../../components/city-info';
import Locations from '../../components/locations';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/app-process/selectors';
import { getOfferCards, getOfferCardsLoading } from '../../store/main-data/selectors';

export default function MainPage() {
  const offerCards = useAppSelector(getOfferCards);
  const areOfferCardsLoading = useAppSelector(getOfferCardsLoading);
  const currentCity = useAppSelector(getCurrentCity);
  const cityOfferCards = offerCards.filter((offerCard) => offerCard.city.name === currentCity);

  if (areOfferCardsLoading) {
    return <Spinner />;
  }

  return (
    <main className={`page__main page__main--index${cityOfferCards.length > 0 ? '' : ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Locations currentCity={currentCity} />
      <CityInfo offerCards={cityOfferCards} currentCity={currentCity} />
    </main>
  );
}
