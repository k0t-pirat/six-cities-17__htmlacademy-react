import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizarionStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  reversed?: boolean;
}

export default function PrivateRoute({children, reversed}: PropsWithChildren<PrivateRouteProps>) {
  const authorizationStatus = useAppSelector((state) => state.authorizarionStatus);

  return authorizationStatus === (reversed ? AuthorizarionStatus.NoAuth : AuthorizarionStatus.Auth)
    ? children
    : <Navigate to={reversed ? AppRoute.Root : AppRoute.Login} replace />;
}
