import { memo, MouseEvent, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';

type LocationItemProps = {
  cityName: string;
  isActive: boolean;
}

function LocationItemTemplate({cityName, isActive}: LocationItemProps) {
  const dispatch = useAppDispatch();
  const onItemClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
  }, [dispatch, cityName]);

  return (
    <li key={cityName} className="locations__item">
      <a
        className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
        href="#"
        onClick={onItemClick}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

const LocationItem = memo(LocationItemTemplate);
export default LocationItem;
