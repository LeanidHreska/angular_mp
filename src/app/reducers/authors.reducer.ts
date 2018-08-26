import { IAction } from '../models/action.model';
import { IAuthor } from '../models/author.model';
import { AuthorsActionTypes } from '../actions/authors.actions';

export interface AuthorReducer {
  authors: IAuthor[];
  isFetching: boolean;
}

const initialState = {
  authors: [],
  isFetching: false,
};

export function authorReducer(state: AuthorReducer = initialState, action: IAction) {
  switch (action.type) {
    case AuthorsActionTypes.GetAuthors:
      return { ...state, isFetching: true };

    case AuthorsActionTypes.GetAuthorsSuccess:
      return { ...state, isFetching: false, authors: action.payload.authors };

    case AuthorsActionTypes.GetAuthorsFailure:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
