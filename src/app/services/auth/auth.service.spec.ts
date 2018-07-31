import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserEntity } from '../../modules/user/models/user-entity.model';

describe('AuthService', () => {
  const user: UserEntity = {
    id: 3,
    firstName: 'Leanid',
    lastName: 'Hreska'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });

    localStorage.removeItem('userInfo');
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('login should work correctly', inject([AuthService], (service: AuthService) => {
    service.login(user);
    expect(JSON.parse(localStorage.getItem('userInfo'))).toEqual(user);
  }));

  it('logout should work correctly', inject([AuthService], (service: AuthService) => {
    service.login(user);
    service.logout();
    expect(localStorage.getItem('userInfo')).toBeFalsy();
  }));

  it('getUserInfo should work correctly', inject([AuthService], (service: AuthService) => {
    service.login(user);
    expect(service.getUserInfo()).toEqual(user);
  }));
});
