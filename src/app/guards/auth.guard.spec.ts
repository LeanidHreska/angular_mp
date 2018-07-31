import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

import RouterStub from '../testing/router-stub';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {provide: Router, useClass: RouterStub }
      ],
    });

  });

  it('should ...', inject([AuthGuard, Router], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
