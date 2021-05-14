import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public signUp(email: any, password: any): Observable<any> {
    return from(Auth.signUp(email, password));
  }

  public confirmSignUp(email: any, code: any): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  public signIn(email: any, password: any): Observable<any> {
    return from(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  public signOut() {
    from(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}
