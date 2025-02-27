import { store } from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppDisaptch = typeof store.dispatch;
