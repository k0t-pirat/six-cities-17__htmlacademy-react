import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  to: AppRoute;
}

export default function Logo({to}: LogoProps) {
  const {pathname} = useLocation();
  const isActiveLogo = pathname as AppRoute !== to;

  if(isActiveLogo) {
    return (
      <Link to={to} className={'header__logo-link'}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    );
  }

  return (
    <a className={'header__logo-link header__logo-link--active'}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </a>
  );
}
