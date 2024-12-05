import { useParams } from 'react-router-dom';
import ReviewsList from '../../components/reviews-list';
import { getMockReviews } from '../../mocks/reviews';
import { getFirstMockOffer } from '../../mocks/offers';
import OfferContainer from '../../components/offer-container';
import NearPlaces from '../../components/near-places';
import { getFirstMockNearOfferCards } from '../../mocks/offer-cards';

export default function OfferPage() {
  const params = useParams();
  const reviews = getMockReviews();
  const currentOffer = getFirstMockOffer();
  const nearOfferCards = getFirstMockNearOfferCards();
  // const currentOffer = getMockO

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
