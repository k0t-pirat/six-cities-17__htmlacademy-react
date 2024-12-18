import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDisaptch, State } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDisaptch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
