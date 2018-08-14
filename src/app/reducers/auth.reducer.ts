import { AuthActionsType } from '../actions/auth.actions';
import { IAction } from '../models/action.model';

export interface AuthReducer { 
  token: string,
  isFetching: boolean,
}

const initialState = {
  token: '',
  isFetching: false,
};

export const authReducer = (state: AuthReducer = initialState, action: IAction) => {
  switch (action.type) {
    case AuthActionsType.Logout:
      return {...state, token: ''};

    case AuthActionsType.LoginSuccess:
      return {...state, token: action.payload.token }

    default:
      return state;
  }
}
