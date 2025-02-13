import { MouseEvent, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationItemProps = {
  cityName: string;
  isActive?: boolean;
}

const getAdditionalClassName = (isActive: boolean | undefined) => {
  if (typeof isActive === 'boolean') {
    return ` tabs__item${isActive ? ' tabs__item--active' : ''}`;
  }

  return '';
};

export default function LocationItemLink({cityName, isActive}: LocationItemProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMainItem = typeof isActive === 'boolean';

  const onItemClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
    if (!isMainItem) {
      navigate(AppRoute.Root);
    }
  }, [dispatch, cityName, navigate, isMainItem]);

  const additionalClassName = getAdditionalClassName(isActive);

  return (
    <a
      className={`locations__item-link${additionalClassName}`}
      href="#"
      onClick={onItemClick}
    >
      <span>{cityName}</span>
    </a>
  );
}
