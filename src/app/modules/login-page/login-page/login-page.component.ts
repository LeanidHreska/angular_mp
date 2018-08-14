import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Login } from '../../../actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Login({
      id: 1,
      name: {
        first: 'Leanid',
        last: 'Hreska',
      },
      login: 'Lowe',
      password: 'elit'
    }));
  }
}
// this.router.navigate(['courses']);