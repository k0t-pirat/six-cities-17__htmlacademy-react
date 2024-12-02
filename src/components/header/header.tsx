import { Link } from 'react-router-dom';
import { AppRoute, AuthorizarionStatus } from '../../const';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import Logo from '../logo';

type HeaderProps = {
  shouldShowUserInfo: boolean;
  offersCount: number;
}

export default function Header({shouldShowUserInfo, offersCount}: HeaderProps) {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo to={AppRoute.Root} />
          </div>
          {shouldShowUserInfo ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authorizationStatus === AuthorizarionStatus.Auth ? (
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">{offersCount}</span>
                      </>
                    ) : (
                      <span className="header__login">Sign in</span>
                    )}
                  </Link>
                </li>
                {authorizationStatus === AuthorizarionStatus.Auth ? (
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
