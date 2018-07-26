import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login({
      id: 1,
      firstName: 'Leanid',
      lastName: 'Hreska'
    });
  }

}