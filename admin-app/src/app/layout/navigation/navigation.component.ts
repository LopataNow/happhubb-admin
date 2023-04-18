import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, map, Observable, shareReplay, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy, OnInit{
  @ViewChild('drawer') drawer: MatSidenav | undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  private tokenSucription?: Subscription;
  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {

  }

  ngOnInit() {
    this.isAuthenticated.next(this.authService.token !== null);
    this.tokenSucription = this.authService.token.asObservable().subscribe(token => {
      this.isAuthenticated.next(token !== null);
    });
  }

  ngOnDestroy() {
    if(this.tokenSucription) this.tokenSucription?.unsubscribe();
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
