import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  const user: User = {
    id: 3,
    name: {
      first: 'Colleen',
      last: 'Day',
    },
    login: 'Olsen',
    password: 'in',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    localStorage.removeItem('userInfo');
  });

  it('should be created', inject([AuthService, HttpClient], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('login should work correctly', inject([AuthService, HttpClient], (service: AuthService) => {
    service.login(user, () => expect(localStorage.getItem('userToken')).toBeTruthy());
  }));

  it('logout should work correctly', inject([AuthService], (service: AuthService) => {
    service.login(user);
    service.logout();
    expect(localStorage.getItem('userInfo')).toBeFalsy();
  }));

  it('getUserInfo should work correctly', inject([AuthService], (service: AuthService) => {
    service.login(user);
    service.getUserInfo().subscribe(data => {
      expect(data).toBe(user);
    });
  }));
});
