import { AuthReducer } from './reducers/auth.reducer';
import { CoursesReducer } from './reducers/courses.reducer';
import { AuthorReducer } from './reducers/authors.reducer';

export interface AppState {
  readonly auth: AuthReducer,
  readonly courses: CoursesReducer,
  readonly authors: AuthorReducer,
}
