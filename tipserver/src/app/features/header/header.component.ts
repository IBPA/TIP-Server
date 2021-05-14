import { Component, OnInit, Input } from '@angular/core';
import { CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Subscription } from 'rxjs';
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  public loggedIn!: boolean;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.auth.isAuthenticated()
          .subscribe(result => {
            this.loggedIn = result;
          });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickLogout() {
    this.auth.signOut();
  }
}
