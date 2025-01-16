import CityInfo from '../../components/city-info';
import Locations from '../../components/locations';
import Spinner from '../../components/spinner/spinner';
import { RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks';

export default function MainPage() {
  const offerCards = useAppSelector((state) => state.offerCards);
  const areOfferCardsLoading = useAppSelector((state) => state.areOfferCardsLoading === RequestStatus.Loading);
  const currentCity = useAppSelector((state) => state.currentCity);
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
