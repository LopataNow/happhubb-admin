import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation-routes-list',
  templateUrl: './navigation-routes-list.component.html',
  styleUrls: ['./navigation-routes-list.component.scss']
})
export class NavigationRoutesListComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
