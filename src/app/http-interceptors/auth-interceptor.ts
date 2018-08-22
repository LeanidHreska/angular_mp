import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: State<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.store.getValue().auth.token;

    if (token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
    }

    return next.handle(authReq);
  }
}
