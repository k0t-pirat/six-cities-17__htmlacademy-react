import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizarionStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

type PrivateRouteProps = {
  reversed?: boolean;
}

export default function PrivateRoute({children, reversed}: PropsWithChildren<PrivateRouteProps>) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthStatusAccepted = reversed ?
    authorizationStatus === AuthorizarionStatus.NoAuth || authorizationStatus === AuthorizarionStatus.Unknown :
    authorizationStatus === AuthorizarionStatus.Auth || authorizationStatus === AuthorizarionStatus.Unknown;

  return isAuthStatusAccepted
    ? children
    : <Navigate to={reversed ? AppRoute.Root : AppRoute.Login} replace />;
}
