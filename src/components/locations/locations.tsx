import { CITIES } from '../../const';

type LocationsProps = {
  currentCity: string;
}

export default function Locations({currentCity}: LocationsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityName) => (
            <li key={cityName} className="locations__item">
              <a className={`locations__item-link tabs__item${currentCity === cityName ? ' tabs__item--active' : ''}`} href="#">
                <span>{cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
