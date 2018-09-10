import { Action } from '@ngrx/store';
import { IAuthor } from '../models/author.model';


export enum AuthorsActionTypes {
  GetAuthors = '[AUTHORS] GetAuthors',
  GetAuthorsSuccess = '[AUTHORS] GetAuthorsSuccess',
  GetAuthorsFailure = '[AUTHORS] GetAuthorsFailure',
}

export class GetAuthors implements Action {
  readonly type = AuthorsActionTypes.GetAuthors;

  constructor() {}
}

export class GetAuthorsSuccess implements Action {
  readonly type = AuthorsActionTypes.GetAuthorsSuccess;

  constructor(public payload: IAuthor) {}
}

export class GetAuthorsFailure implements Action {
  readonly type = AuthorsActionTypes.GetAuthorsFailure;

  constructor(public payload: any) {}
}
