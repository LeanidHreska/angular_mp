import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Logout, GetUserInfo } from '../../../actions/auth.actions';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User | {};
  private userSubscription: SubscriptionLike;
  private userInfoSubscription: SubscriptionLike;

  constructor(public authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.userSubscription = this.store.select(state => state.auth.user).subscribe(user => this.user = user);
    this.userInfoSubscription = this.store.select(state => state.auth.token).subscribe(token =>
      token && this.store.dispatch(new GetUserInfo({ token })));
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
