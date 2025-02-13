import { CITIES } from '../../const';
import LocationItem from '../location-item';

type LocationsProps = {
  currentCity: string;
}

export default function Locations({currentCity}: LocationsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityName) => (
            <LocationItem key={cityName} cityName={cityName} isActive={currentCity === cityName} />
          ))}
        </ul>
      </section>
    </div>
  );
}
