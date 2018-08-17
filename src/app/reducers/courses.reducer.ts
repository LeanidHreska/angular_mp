import { IAction } from '../models/action.model';
import { CoursesListItem } from '../models/course-item.model';
import { CoursesActionsType } from '../actions/courses.actions';

export interface CoursesReducer {
  coursesList: CoursesListItem[];
  isFetching: boolean;
  course: CoursesListItem | null;
}

const initialState = {
  coursesList: [],
  isFetching: false,
  course: null,
};

export function coursesReducer(state: CoursesReducer = initialState, action: IAction) {
  switch (action.type) {
    case CoursesActionsType.GetCoursesList:
      return { ...state, isFetching: true };

    case CoursesActionsType.GetCoursesListSuccess:
      return { ...state, coursesList: action.payload.coursesList, isFetching: false };

    case CoursesActionsType.GetCoursesListFailure:
      return { ...state, isFetching: false };

    case CoursesActionsType.GetCourseById:
      return { ...state, isFetching: true };

    case CoursesActionsType.GetCourseByIdSuccess:
      return { ...state, course: action.payload.course, isFetching: false };

    case CoursesActionsType.GetCourseByIdFailure:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
