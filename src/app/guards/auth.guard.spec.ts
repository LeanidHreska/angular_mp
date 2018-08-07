import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        AuthGuard,
        {provide: Router, useClass: RouterTestingModule }
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
    });

  });

  it('should ...', inject([AuthGuard, Router], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
