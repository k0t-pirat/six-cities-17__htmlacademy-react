import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteByOfferId } from '../../store/favorite-data/selectors';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { AppRoute, AuthorizarionStatus } from '../../const';
import { updateFavorite } from '../../store/api-actions';

type FavoriteButtonProps = {
  offerId: string;
  className?: string;
}

const DEFAULT_CLASS_NAME = 'place-card';

export default function FavoriteButton({offerId, className = DEFAULT_CLASS_NAME} : FavoriteButtonProps) {
  const isFavorite = useAppSelector((state) => getFavoriteByOfferId(state, offerId));
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const accessibileText = isFavorite ? 'In bookmarks' : 'To bookmarks';
  const imgWidth = useMemo(() => className === DEFAULT_CLASS_NAME ? 18 : 31, [className]);
  const imgHeight = useMemo(() => className === DEFAULT_CLASS_NAME ? 19 : 33, [className]);

  return (
    <button
      className={`${className}__bookmark-button button${isFavorite ? ` ${className}__bookmark-button--active` : ''}`}
      type="button"
      onClick={() => {
        if (authorizationStatus === AuthorizarionStatus.Auth) {
          dispatch(updateFavorite({offerId, isFavorite}));
        } else {
          navigate(AppRoute.Login);
        }
      }}
    >
      <svg className={`${className}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{accessibileText}</span>
    </button>
  );
}
