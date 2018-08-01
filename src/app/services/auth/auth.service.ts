import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { serverUrl } from '../../config/config';

interface UserToken {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user: User, callback?: Function) {
    return this.http.post<UserToken>(`${serverUrl}/auth/login`, user)
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
    return this.http.get<User>(`${serverUrl}/auth/userInfo`, {
      headers: {
        'Authorization': localStorage.getItem('userToken'),
      }
    });
  }
}
