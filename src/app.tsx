import MainPage from './pages/main-page';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps) {
  return (
    <MainPage offersCount={offersCount} />
  );
}

