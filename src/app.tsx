import Layout from './components/layout';
import FavoritesPage from './pages/favorites-page';
import LoginPage from './pages/login-page';
import MainPage from './pages/main-page';
import OfferPage from './pages/offer-page/offer-page';

type AppProps = {
  offersCount: number;
}

const Page = {
  Main: 'main',
  Offer: 'offer',
  Favorites: 'favorites',
  Login: 'login',
};

const currentPage = Page.Main;

const renderCurrentPage = (offersCount: number) => {
  switch(currentPage) {
    case Page.Main:
      return <MainPage offersCount={offersCount} />;
    case Page.Offer:
      return <OfferPage />;
    case Page.Favorites:
      return <FavoritesPage offersCount={offersCount} />;
    case Page.Login:
      return <LoginPage />;
  }

  return null;
};

export default function App({offersCount}: AppProps) {
  return (
    <Layout currentPage={currentPage} offersCount={offersCount}>
      {renderCurrentPage(offersCount)}
    </Layout>
  );
}

