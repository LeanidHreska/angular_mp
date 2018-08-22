import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { serverUrl } from '../config/config';
import { IAction } from '../models/action.model';
import { HttpClient } from '@angular/common/http';
import { CoursesActionsType } from '../actions/courses.actions';


@Injectable()
export class CoursesEffects {
  @Effect()
  getCoursesList$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionsType.GetCoursesList),
    mergeMap((action: IAction) =>
      this.http.get(`${serverUrl}/courses?${action.payload.query}`).pipe(
        map(data => ({ type: CoursesActionsType.GetCoursesListSuccess, payload: {
          coursesList: data,
        } })),

        catchError(() => of({ type: CoursesActionsType.GetCoursesListFailure }))
      )
    )
  );

  @Effect()
  getCourseById$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionsType.GetCourseById),
    switchMap((action: IAction) =>
      this.http.get(`${serverUrl}/courses/${action.payload.id}`).pipe(
        map(course => ({ type: CoursesActionsType.GetCourseByIdSuccess, payload: {
          course,
        }})),

        catchError(() => of({ type: CoursesActionsType.GetCourseByIdSuccess }))
      )
    )
  );

  @Effect()
  removeCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionsType.RemoveCourse),
    switchMap((action: IAction) =>
      this.http.delete(`${serverUrl}/courses/${action.payload.id}`).pipe(
        map(course => ({ type: CoursesActionsType.RemoveCourseSuccess })),
        tap(_ => action.payload.callback && action.payload.callback()),

        catchError(() => of({ type: CoursesActionsType.RemoveCourseFailure }))
      )
    )
  );

  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionsType.CreateCourse),
    mergeMap((action: IAction) =>
      this.http.post(`${serverUrl}/courses`, action.payload).pipe(
        map(course => ({ type: CoursesActionsType.CreateCourseSuccess })),

        catchError(() => of({ type: CoursesActionsType.CreateCourseFailure }))
      )
    )
  );

  @Effect()
  editCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionsType.EditCourse),
    mergeMap((action: IAction) =>
      this.http.put(`${serverUrl}/courses/${action.payload.id}`, action.payload).pipe(
        map(course => ({ type: CoursesActionsType.EditCourseSuccess })),

        catchError(() => of({ type: CoursesActionsType.EditCourseFailure }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
