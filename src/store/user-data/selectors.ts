import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizarionStatus;
export const getAuthData = (state: State) => state[NameSpace.User].authData;
