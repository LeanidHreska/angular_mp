import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from '../../../app.state';
import { Login } from '../../../actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) { }

  public loginForm = new FormGroup({
    'login': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('', [
      Validators.required
    ]),
  })

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    this.store.dispatch(new Login(this.loginForm.value));
  }
}
