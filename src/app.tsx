import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { AppRoute } from './const';
import MainPage from './pages/main-page';
import OfferPage from './pages/offer-page';
import FavoritesPage from './pages/favorites-page';
import LoginPage from './pages/login-page';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './components/private-route';
import { getMockFavoriteOfferCards } from './mocks/offer-cards';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const favoriteOfferCards = getMockFavoriteOfferCards();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout favoriteOffersCount={favoriteOfferCards.length} />}>
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage favoriteOfferCards={favoriteOfferCards} />
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
    </HelmetProvider>
  );
}

