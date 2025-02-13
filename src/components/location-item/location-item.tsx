import { memo } from 'react';
import LocationItemLink from './location-item-link';

type LocationItemProps = {
  cityName: string;
  isActive?: boolean;
}

function LocationItemTemplate({cityName, isActive}: LocationItemProps) {
  if (typeof isActive === 'boolean') {
    return (
      <li className="locations__item">
        <LocationItemLink cityName={cityName} isActive={isActive} />
      </li>
    );
  }

  return (
    <div className="locations__item">
      <LocationItemLink cityName={cityName} />
    </div>
  );
}

const LocationItem = memo(LocationItemTemplate);
export default LocationItem;
