import { AuthActionsType } from '../actions/auth.actions';
import { IAction } from '../models/action.model';
import { User } from '../models/user.model';

export interface AuthReducer {
  token: string;
  isFetching: boolean;
  user: User;
}

const initialState = {
  token: '',
  isFetching: false,
  user: null,
};

export function authReducer(state: AuthReducer = initialState, action: IAction) {
  switch (action.type) {
    case AuthActionsType.Logout:
      return { ...state, token: ''};

    case AuthActionsType.Login:
      return { ...state, isFetching: true };

    case AuthActionsType.LoginSuccess:
      return { ...state, token: action.payload.token };


    case AuthActionsType.GetUserInfo:
      return { ...state, isFetching: true };

    case AuthActionsType.GetUserInfoSuccess:
      return { ...state, user: action.payload.user };

    default:
      return state;
  }
}
