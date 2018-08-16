import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthActionsType } from '../actions/auth.actions';
import { serverUrl } from '../config/config';
import { IAction } from '../models/action.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.Login),
    mergeMap((action: IAction) =>
      this.http.post(`${serverUrl}/auth/login`, action.payload).pipe(
        tap(_ => this.router.navigate(['courses'])),
        map(data => ({ type: AuthActionsType.LoginSuccess, payload: data })),

        catchError(() => of({ type: AuthActionsType.LoginFailure }))
      )
    )
  );

  @Effect()
  getUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.GetUserInfo),
    mergeMap((action: IAction) =>
    this.http.post(`${serverUrl}/auth/userInfo`, {
      headers: {
        'Authorization': action.payload.token,
      }}).pipe(
        map(data => ({ type: AuthActionsType.GetUserInfoSuccess, payload: data })),

        catchError(() => of({ type: AuthActionsType.GetUserInfoFailure }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions, private router: Router) {}
}
