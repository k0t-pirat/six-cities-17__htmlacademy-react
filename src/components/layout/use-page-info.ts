import { useLocation } from 'react-router-dom';
import { AppRoute, ID_PARAM } from '../../const';
import { useEffect } from 'react';

type PageInfo = {layoutClassName: string; hasUserInfo: boolean; hasFooter: boolean; title: string}
type PagesInfoSlice = {[key: string]: PageInfo};

const getPageInfo = (pathname: string, offersCount: number) => {
  const realPathname = pathname.includes(AppRoute.Offer.replace(ID_PARAM, '')) ? AppRoute.Offer : pathname;

  const defaultPageInfo = {
    layoutClassName: '',
    shouldShowUserInfo: false,
    hasFooter: false,
    title: '',
  };

  const pageInfo: PagesInfoSlice = {
    [AppRoute.Root]: {
      layoutClassName: ' page--gray page--main',
      hasUserInfo: true,
      hasFooter: false,
      title: '',
    },
    [AppRoute.Offer]: {
      layoutClassName: '',
      hasUserInfo: true,
      hasFooter: false,
      title: 'offer',
    },
    [AppRoute.Favorites]: {
      layoutClassName: offersCount > 0 ? '' : ' page--favorites-empty',
      hasUserInfo: true,
      hasFooter: true,
      title: offersCount > 0 ? 'favorites' : 'favorites empty',
    },
    [AppRoute.Login]: {
      layoutClassName: ' page--gray page--login',
      hasUserInfo: false,
      hasFooter: false,
      title: 'authorization',
    },
  };

  return pageInfo[realPathname] || defaultPageInfo;
};

export default function usePageInfo(offersCount: number): PageInfo {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return getPageInfo(pathname, offersCount);
}
