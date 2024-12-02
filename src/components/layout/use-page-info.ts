import { useLocation } from 'react-router-dom';
import { AppRoute, ID_PARAM } from '../../const';
import { useEffect } from 'react';

type PageInfo = {layoutClassName: string; shouldShowUserInfo: boolean; shouldShowFooter: boolean}
type PagesInfoSlice = {[key: string]: PageInfo};

const getPageInfo = (pathname: string, offersCount: number) => {
  const realPathname = pathname.includes(AppRoute.Offer.replace(ID_PARAM, '')) ? AppRoute.Offer : pathname;

  const defaultPageInfo = {
    layoutClassName: '',
    shouldShowUserInfo: false,
    shouldShowFooter: false,
  };

  const pageInfo: PagesInfoSlice = {
    [AppRoute.Root]: {
      layoutClassName: ' page--gray page--main',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
    },
    [AppRoute.Offer]: {
      layoutClassName: '',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
    },
    [AppRoute.Favorites]: {
      layoutClassName: offersCount > 0 ? '' : ' page--favorites-empty',
      shouldShowUserInfo: true,
      shouldShowFooter: true,
    },
    [AppRoute.Login]: {
      layoutClassName: ' page--gray page--login',
      shouldShowUserInfo: false,
      shouldShowFooter: false,
    },
  };

  return pageInfo[realPathname] || defaultPageInfo;
};

export default function usePageInfo(offersCount: number): PageInfo {
  const {pathname} = useLocation();

  // temp before module4-task1
  if (pathname.includes(AppRoute.Offer.replace(ID_PARAM, ''))) {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return getPageInfo(pathname, offersCount);
}
