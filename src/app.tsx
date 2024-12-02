import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import FavoritesPage from './pages/favorites-page';
import LoginPage from './pages/login-page';
import MainPage from './pages/main-page';
import OfferPage from './pages/offer-page/offer-page';
import { AppRoute } from './const';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './components/private-route';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout offersCount={offersCount} />}>
          <Route index element={<MainPage offersCount={offersCount} />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage offersCount={offersCount} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute reversed>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

