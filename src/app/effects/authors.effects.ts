import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { serverUrl } from '../config/config';
import { IAction } from '../models/action.model';
import { HttpClient } from '@angular/common/http';
import { AuthorsActionTypes } from '../actions/authors.actions';


@Injectable()
export class AuthorsEffects {
  @Effect()
  getAuthors$: Observable<Action> = this.actions$.pipe(
    ofType(AuthorsActionTypes.GetAuthors),
    mergeMap((action: IAction) =>
      this.http.get(`${serverUrl}/authors`).pipe(
        map(data => ({ type: AuthorsActionTypes.GetAuthorsSuccess, payload: { authors: data } })),

        catchError(() => of({ type: AuthorsActionTypes.GetAuthorsFailure }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
