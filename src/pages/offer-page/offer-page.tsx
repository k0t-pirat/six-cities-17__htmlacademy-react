import { Navigate, useParams } from 'react-router-dom';
import ReviewsList from '../../components/reviews-list';
import { getMockReviews } from '../../mocks/reviews';
import { getMockOffer } from '../../mocks/offers';
import OfferContainer from '../../components/offer-container';
import NearPlaces from '../../components/near-places';
import { getMockNearOfferCards } from '../../mocks/offer-cards';
import { AppRoute } from '../../const';

export default function OfferPage() {
  const {id: offerId = ''} = useParams();
  const currentOffer = getMockOffer(offerId);
  const nearOfferCards = getMockNearOfferCards(offerId);
  const reviews = getMockReviews();

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferContainer currentOffer={currentOffer}>
        <ReviewsList reviews={reviews} />
      </OfferContainer>
      <div className="container">
        <NearPlaces nearOfferCards={nearOfferCards} />
      </div>
    </main>
  );
}
