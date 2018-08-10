import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { serverUrl } from '../../config/config';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) { }

  login(user: User, callback?: Function) {
    return this.http.post(`${serverUrl}/auth/login`, user)
      .subscribe(
        data => {
          localStorage.setItem('userToken', data.token);
          if (callback) {
            callback();
          }
        },
        error => console.log(error)
      );
  }

  logout() {
    localStorage.removeItem('userToken');
  }

  isAuth() {
    return !!localStorage.getItem('userToken');
  }

  getUserInfo() {
    return this.http.post(`${serverUrl}/auth/userInfo`, {
      headers: {
        'Authorization': localStorage.getItem('userToken'),
      }
    });
  }
}
