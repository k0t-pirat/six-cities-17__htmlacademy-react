import { PropsWithChildren } from 'react';
import Header from '../header';
import Footer from '../footer';

type LayoutProps = {
  currentPage: string;
  offersCount: number;
}

type PageInfo = {[key: string]: {layoutClassName: string; shouldShowUserInfo: boolean; shouldShowFooter: boolean}};

const getPageInfo = (page: string, offersCount: number) => {
  const pageInfo: PageInfo = {
    main: {
      layoutClassName: ' page--gray page--main',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
    },
    offer: {
      layoutClassName: '',
      shouldShowUserInfo: true,
      shouldShowFooter: false,
    },
    favorites: {
      layoutClassName: offersCount > 0 ? '' : ' page--favorites-empty',
      shouldShowUserInfo: true,
      shouldShowFooter: true,
    },
    login: {
      layoutClassName: ' page--gray page--login',
      shouldShowUserInfo: false,
      shouldShowFooter: false,
    },
  };

  return pageInfo[page];
};

export default function Layout({children, currentPage, offersCount}: PropsWithChildren<LayoutProps>) {
  const {layoutClassName, shouldShowUserInfo, shouldShowFooter} = getPageInfo(currentPage, offersCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Header shouldShowUserInfo={shouldShowUserInfo} />
      {children}
      {shouldShowFooter ? <Footer /> : null}
    </div>
  );
}
