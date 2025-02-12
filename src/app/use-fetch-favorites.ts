import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AuthorizarionStatus } from '../const';
import { fetchFavorites } from '../store/api-actions';
import { clearFavorites } from '../store/favorite-data/favorite-data';
import { getAuthorizationStatus } from '../store/user-data/selectors';

export default function useFetchFavorites() {
  const authotizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authotizationStatus === AuthorizarionStatus.Auth) {
      dispatch(fetchFavorites());
    } else {
      dispatch(clearFavorites());
    }
  }, [dispatch, authotizationStatus]);
}
