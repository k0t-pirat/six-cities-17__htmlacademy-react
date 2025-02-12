import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentCity = (state: State) => state[NameSpace.App].currentCity;
export const getCurrentSort = (state: State) => state[NameSpace.App].currentSort;
