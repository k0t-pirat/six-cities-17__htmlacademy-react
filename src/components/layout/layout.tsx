import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import usePageInfo from './use-page-info';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoritesCount } from '../../store/favorite-data/selectors';

export default function Layout() {
  const favoritesCount = useAppSelector(getFavoritesCount);
  const {layoutClassName, hasUserInfo, hasFooter, title} = usePageInfo(favoritesCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Helmet>
        <title>6 cities{title ? `: ${title}` : ''}</title>
      </Helmet>
      <Header hasUserInfo={hasUserInfo} favoritesCount={favoritesCount} />
      <Outlet />
      {hasFooter ? <Footer /> : null}
    </div>
  );
}
