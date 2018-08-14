import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Logout } from '../../../actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(public authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.authService.isAuth()
      .subscribe(isAuth => {
        if (isAuth) {
          this.authService.getUserInfo().subscribe(user => this.user = user);
        }
      });
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['login']);
  }
}
