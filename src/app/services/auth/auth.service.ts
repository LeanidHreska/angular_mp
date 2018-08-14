import { Injectable } from '@angular/core';
import { serverUrl } from '../../config/config';
import { HttpService } from '../http/http.service';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService, private store: Store<AppState>) { }

  isAuth() {
    return this.store.select(state => !!state.auth.token)
  }

  getUserInfo() {
    return this.http.post(`${serverUrl}/auth/userInfo`, {
      headers: {
        'Authorization': localStorage.getItem('userToken'),
      }
    });
  }
}
