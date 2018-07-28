import { Injectable } from '@angular/core';
import { UserEntity } from '../../modules/user/models/user-entity.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(userData: UserEntity) {
    localStorage.setItem('userInfo', JSON.stringify(userData));
    console.log(userData)
  }

  logout() {
    localStorage.removeItem('userInfo');
  }

  isAuth() {
    return !!localStorage.getItem('userInfo');
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }
}
