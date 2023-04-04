import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationRoutesListComponent } from './navigation-routes-list/navigation-routes-list.component';
import { LayoutMateralModule } from './layout-materal.module';
import { AppRoutesModule } from '../app-routes.module';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationRoutesListComponent
  ],
  imports: [
    AppRoutesModule,
    CommonModule,
    LayoutMateralModule,
  ],
  exports: [
    LayoutMateralModule,
    NavigationComponent,
    NavigationRoutesListComponent
  ]
})
export class LayoutModule { }
