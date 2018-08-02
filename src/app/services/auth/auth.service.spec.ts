import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        HttpClient
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([AuthService, HttpClient], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
