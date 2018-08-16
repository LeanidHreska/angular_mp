import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Logout } from '../../../actions/auth.actions';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User;
  private userInfoSubscription: SubscriptionLike;

  constructor(public authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.userInfoSubscription = this.authService.isAuth()
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

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
  }
}
