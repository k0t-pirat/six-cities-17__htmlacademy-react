import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isActiveLogo: boolean;
}

export default function Logo({isActiveLogo}: LogoProps) {
  if(isActiveLogo) {
    return (
      <Link to={AppRoute.Root} className={'header__logo-link'}>
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
