import { Action } from '@ngrx/store';
import { CoursesListItem } from '../models/course-item.model';

export enum CoursesActionsType {
  GetCoursesList = '[COURSES] GetCoursesList',
  GetCoursesListSuccess = '[COURSES] GetCoursesListSuccess',
  GetCoursesListFailure = '[COURSES] GetCoursesListFailure',

  GetCourseById = '[COURSES] GetCourseById',
  GetCourseByIdSuccess = '[COURSES] GetCourseByIdSuccess',
  GetCourseByIdFailure = '[COURSES] GetCourseByIdFailure',

  RemoveCourse = '[COURSES] RemoveCourse',
  RemoveCourseSuccess = '[COURSES] RemoveCourseSuccess',
  RemoveCourseFailure = '[COURSES] RemoveCourseFailure',

  CreateCourse = '[COURSES] CreateCourse',
  CreateCourseSuccess = '[COURSES] CreateCourseSuccess',
  CreateCourseFailure = '[COURSES] CreateCourseFailure',

  EditCourse = '[COURSES] EditCourse',
  EditCourseSuccess = '[COURSES] EditCourseSuccess',
  EditCourseFailure = '[COURSES] EditCourseFailure',
}

export class GetCoursesList implements Action {
  readonly type = CoursesActionsType.GetCoursesList;

  constructor(public payload: { query: string }) {}
}

export class GetCoursesListSuccess implements Action {
  readonly type = CoursesActionsType.GetCoursesListSuccess;

  constructor(public payload: CoursesListItem[]) {}
}

export class GetCoursesListFailure implements Action {
  readonly type = CoursesActionsType.GetCoursesListFailure;

  constructor(public payload: any) {}
}

export class GetCourseById implements Action {
  readonly type = CoursesActionsType.GetCourseById;

  constructor(public payload: { id: number }) {}
}

export class GetCourseByIdSuccess implements Action {
  readonly type = CoursesActionsType.GetCourseByIdSuccess;

  constructor(public payload: { course: CoursesListItem }) {}
}

export class GetCourseByIdFailure implements Action {
  readonly type = CoursesActionsType.GetCourseByIdFailure;

  constructor(public payload: any) {}
}

export class RemoveCourse implements Action {
  readonly type = CoursesActionsType.RemoveCourse;

  constructor(public payload: { id: number, callback?: Function }) {}
}

export class RemoveCourseSuccess implements Action {
  readonly type = CoursesActionsType.RemoveCourse;

  constructor(public payload: any) {}
}

export class RemoveCourseFailure implements Action {
  readonly type = CoursesActionsType.RemoveCourse;

  constructor(public payload: any) {}
}

export class CreateCourse implements Action {
  readonly type = CoursesActionsType.CreateCourse;

  constructor(public payload: CoursesListItem) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionsType.CreateCourseSuccess;
}

export class CreateCourseFailure implements Action {
  readonly type = CoursesActionsType.CreateCourseFailure;
}

export class EditCourse implements Action {
  readonly type = CoursesActionsType.EditCourse;

  constructor(public payload: CoursesListItem) {}
}

export class EditCourseSuccess implements Action {
  readonly type = CoursesActionsType.EditCourseSuccess;
}

export class EditCourseFailure implements Action {
  readonly type = CoursesActionsType.EditCourseFailure;
}
