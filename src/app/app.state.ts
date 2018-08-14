import { AuthReducer } from './reducers/auth.reducer';

export interface AppState {
  readonly auth: AuthReducer,
}
