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
import { getCurrentOffer, getCurrentOfferLoading, getNearOfferCards } from '../../store/offer-data/selectors';
import { getReviews } from '../../store/review-data/selectors';
import { setCurrentOfferStatus } from '../../store/offer-data/offer-data';

export default function OfferPage() {
  const {id: offerId = ''} = useParams();
  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(getCurrentOffer);
  const isLoading = useAppSelector(getCurrentOfferLoading);
  const nearOfferCards = useAppSelector(getNearOfferCards);
  const offerReviews = useAppSelector(getReviews);

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
