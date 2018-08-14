import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';


export enum AuthActionsType {
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] LoginSuccess',
  LoginFailure = '[AUTH] LoginFailure',

  Logout = '[AUTH] Logout'
}

export class Login implements Action {
  readonly type = AuthActionsType.Login

  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionsType.LoginSuccess

  constructor(public payload: { token: string }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionsType.LoginFailure

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionsType.Logout

  constructor(public payload: any = null) { }
}
