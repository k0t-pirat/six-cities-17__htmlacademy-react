import { useMemo } from 'react';
import LocationItem from '../../components/location-item';
import LoginForm from '../../components/login-form';
import { CITIES } from '../../const';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const getRandomItem = <T, >(arr: T[]) => arr[getRandomNumber(0, arr.length - 1)];

export default function LoginPage() {
  const randomCityName = useMemo(() => getRandomItem(CITIES), []);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem cityName={randomCityName} />
        </section>
      </div>
    </main>
  );
}
