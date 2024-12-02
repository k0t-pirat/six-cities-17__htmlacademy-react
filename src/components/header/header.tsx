import { AuthorizarionStatus } from '../../const';
import { getAuthorizationStatus } from '../../mocks/authorization-status';

type HeaderProps = {
  shouldShowUserInfo: boolean;
  isActiveLogo: boolean;
  offersCount: number;
}

export default function Header({shouldShowUserInfo, isActiveLogo, offersCount}: HeaderProps) {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link${isActiveLogo ? '' : ' header__logo-link--active'}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {shouldShowUserInfo ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authorizationStatus === AuthorizarionStatus.Auth ? (
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">{offersCount}</span>
                      </>
                    ) : (
                      <span className="header__login">Sign in</span>
                    )}
                  </a>
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
