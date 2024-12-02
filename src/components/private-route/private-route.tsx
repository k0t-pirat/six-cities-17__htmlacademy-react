import { PropsWithChildren } from 'react';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { AppRoute, AuthorizarionStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  reversed?: boolean;
}

export default function PrivateRoute({children, reversed}: PropsWithChildren<PrivateRouteProps>) {
  const authorizationStatus = getAuthorizationStatus();

  return authorizationStatus === (reversed ? AuthorizarionStatus.NoAuth : AuthorizarionStatus.Auth)
    ? children
    : <Navigate to={reversed ? AppRoute.Root : AppRoute.Login} replace />;
}
