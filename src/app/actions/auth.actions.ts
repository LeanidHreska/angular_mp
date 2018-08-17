import { Action } from '@ngrx/store';
import { User } from '../models/user.model';


export enum AuthActionsType {
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] LoginSuccess',
  LoginFailure = '[AUTH] LoginFailure',

  Logout = '[AUTH] Logout',

  GetUserInfo = '[AUTH] GetUserInfo',
  GetUserInfoSuccess = '[AUTH] GetUserInfoSuccess',
  GetUserInfoFailure = '[AUTH] GetUserInfoFailure',
}

export class Login implements Action {
  readonly type = AuthActionsType.Login;

  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionsType.LoginSuccess;

  constructor(public payload: { token: string }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionsType.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionsType.Logout;

  constructor(public payload: any = null) { }
}

export class GetUserInfo implements Action {
  readonly type = AuthActionsType.GetUserInfo;

  constructor(public payload: { token: string }) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionsType.GetUserInfoSuccess;

  constructor(public payload: User) {}
}
