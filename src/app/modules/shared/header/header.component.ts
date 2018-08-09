import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
