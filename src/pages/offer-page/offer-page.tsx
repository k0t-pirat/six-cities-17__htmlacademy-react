import { Navigate, useParams } from 'react-router-dom';
import ReviewsList from '../../components/reviews-list';
import OfferContainer from '../../components/offer-container';
import NearPlaces from '../../components/near-places';
import { AppRoute, RequestStatus } from '../../const';
import { getMapPoints } from '../../helpers';
import { fetchCurrentOffer, fetchNearOfferCards, fetchReviews } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import Spinner from '../../components/spinner';
import { setCurrentOfferStatus } from '../../store/action';

const MAX_NEAR_OFFERS_COUNT = 3;

export default function OfferPage() {
  const {id: offerId = ''} = useParams();
  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const isLoading = useAppSelector((state) => state.currentOfferStatus === RequestStatus.Idle || state.currentOfferStatus === RequestStatus.Loading);
  const nearOfferCards = useAppSelector((state) => state.nearOfferCards.slice(0, MAX_NEAR_OFFERS_COUNT));
  const offerReviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchCurrentOffer(offerId));
      dispatch(fetchNearOfferCards(offerId));
      dispatch(fetchReviews(offerId));
      return () => {
        dispatch(setCurrentOfferStatus(RequestStatus.Idle));
      };
    }
  }, [dispatch, offerId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferContainer currentOffer={currentOffer} mapPoints={getMapPoints(nearOfferCards, currentOffer)}>
        <ReviewsList reviews={offerReviews} offerId={offerId} />
      </OfferContainer>
      <div className="container">
        <NearPlaces nearOfferCards={nearOfferCards} />
      </div>
    </main>
  );
}
