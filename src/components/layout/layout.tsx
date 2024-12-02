import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import usePageInfo from './use-page-info';

type LayoutProps = {
  offersCount: number;
}

export default function Layout({offersCount}: LayoutProps) {
  const {layoutClassName, shouldShowUserInfo, shouldShowFooter, isActiveLogo} = usePageInfo(offersCount);

  return (
    <div className={`page${layoutClassName}`}>
      <Header shouldShowUserInfo={shouldShowUserInfo} isActiveLogo={isActiveLogo} offersCount={offersCount} />
      <Outlet />
      {shouldShowFooter ? <Footer /> : null}
    </div>
  );
}
