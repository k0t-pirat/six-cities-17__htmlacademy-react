import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import usePageInfo from './use-page-info';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  favoriteOffersCount: number;
}

export default function Layout({favoriteOffersCount}: LayoutProps) {
  const {layoutClassName, hasUserInfo, hasFooter, title} = usePageInfo(favoriteOffersCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Helmet>
        <title>6 cities{title ? `: ${title}` : ''}</title>
      </Helmet>
      <Header hasUserInfo={hasUserInfo} favoriteOffersCount={favoriteOffersCount} />
      <Outlet />
      {hasFooter ? <Footer /> : null}
    </div>
  );
}
