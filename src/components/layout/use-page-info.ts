import { useLocation } from 'react-router-dom';
import { AppRoute, ID_PARAM } from '../../const';

type PageInfo = {layoutClassName: string; shouldShowUserInfo: boolean; shouldShowFooter: boolean; isActiveLogo: boolean}
type PagesInfoSlice = {[key: string]: PageInfo};

const getPageInfo = (pathname: string, offersCount: number) => {
  const realPathname = pathname.includes(AppRoute.Offer.replace(ID_PARAM, '')) ? AppRoute.Offer : pathname;

  const defaultPageInfo = {
    layoutClassName: '',
    shouldShowUserInfo: false,
    shouldShowFooter: false,
    isActiveLogo: true,
  };

  const pageInfo: PagesInfoSlice = {
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

export default function usePageInfo(offersCount: number): PageInfo {
  const {pathname} = useLocation();
  return getPageInfo(pathname, offersCount);
}
