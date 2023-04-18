import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      //TODO: Add navigate to login page
      this.router.navigate(['login'], {
        skipLocationChange: true
      });
      return false;
    }

    if(this.router.url === '/login') {
      this.router.navigate([''], {
        skipLocationChange: true
      });
    }
    
    return true;
  }
}
