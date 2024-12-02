import Header from '../header';
import Footer from '../footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, ID_PARAM } from '../../const';

type LayoutProps = {
  offersCount: number;
}

type PageInfo = {[key: string]: {layoutClassName: string; shouldShowUserInfo: boolean; shouldShowFooter: boolean; isActiveLogo: boolean}};

const getPageInfo = (pathname: string, offersCount: number) => {
  const realPathname = pathname.includes(AppRoute.Offer.replace(ID_PARAM, '')) ? AppRoute.Offer : pathname;

  const defaultPageInfo = {
    layoutClassName: '',
    shouldShowUserInfo: false,
    shouldShowFooter: false,
    isActiveLogo: true,
  };

  const pageInfo: PageInfo = {
    [AppRoute.Root]: {
      layoutClassName: ' page--gray page--main',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
      isActiveLogo: false,
    },
    [AppRoute.Offer]: {
      layoutClassName: '',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
      isActiveLogo: true,
    },
    [AppRoute.Favorites]: {
      layoutClassName: offersCount > 0 ? '' : ' page--favorites-empty',
      shouldShowUserInfo: true,
      shouldShowFooter: true,
      isActiveLogo: true,
    },
    [AppRoute.Login]: {
      layoutClassName: ' page--gray page--login',
      shouldShowUserInfo: false,
      shouldShowFooter: false,
      isActiveLogo: true,
    },
  };

  return pageInfo[realPathname] || defaultPageInfo;
};

export default function Layout({offersCount}: LayoutProps) {
  const {pathname} = useLocation();
  const {layoutClassName, shouldShowUserInfo, shouldShowFooter, isActiveLogo} = getPageInfo(pathname, offersCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Header shouldShowUserInfo={shouldShowUserInfo} isActiveLogo={isActiveLogo} offersCount={offersCount} />
      <Outlet />
      {shouldShowFooter ? <Footer /> : null}
    </div>
  );
}
