import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type FirstUsetState = 'peeding' | 'notExists' | 'exists';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firstUserState = new BehaviorSubject<FirstUsetState>('peeding');
  token = new BehaviorSubject<string | null>(null);

  public isAuthenticated(): boolean {
    if(this.token.getValue() !== null) return true;

    const token = localStorage.getItem('access_token');
    if(token == null) {
      return false;
    }
    this.token.next(token);

    return true;
  }

  constructor(private http: HttpClient, private router: Router) {}

  public login() {
    this.token.next(null);

    window.setTimeout(() => {
      localStorage.setItem('access_token', 'token');
      this.token.next('token');
      this.router.navigate(['dashboard']);
    } , 100);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.token.next(null);
    this.router.navigate(['login']);
  }

  public checkUsersStatus(): void {
    this.firstUserState.next('peeding');

    window.setTimeout(() => {
      this.firstUserState.next('exists');
    }, 100);
  }
}
