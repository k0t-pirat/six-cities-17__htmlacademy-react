import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import usePageInfo from './use-page-info';

type LayoutProps = {
  favoriteOffersCount: number;
}

export default function Layout({favoriteOffersCount}: LayoutProps) {
  const {layoutClassName, shouldShowUserInfo, shouldShowFooter} = usePageInfo(favoriteOffersCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Header shouldShowUserInfo={shouldShowUserInfo} favoriteOffersCount={favoriteOffersCount} />
      <Outlet />
      {shouldShowFooter ? <Footer /> : null}
    </div>
  );
}
