import { AuthReducer } from './reducers/auth.reducer';
import { CoursesReducer } from './reducers/courses.reducer';

export interface AppState {
  readonly auth: AuthReducer,
  readonly courses: CoursesReducer,
}
