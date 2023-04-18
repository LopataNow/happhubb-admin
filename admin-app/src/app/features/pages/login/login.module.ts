import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginMaterialModule } from './login-material.module';
import { CommonModule } from '@angular/common';
import { RegisterFirstFormComponent } from './register-first-form/register-first-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterFirstFormComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoginMaterialModule
  ],
})
export class LoginModule { }
