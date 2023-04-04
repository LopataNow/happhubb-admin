import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesRoutesModule } from './features/pages/features-routes.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [FeaturesRoutesModule, RouterModule],
})
export class AppRoutesModule { }
