import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-first-form',
  templateUrl: './register-first-form.component.html',
  styleUrls: ['./register-first-form.component.scss']
})
export class RegisterFirstFormComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  onSubmit() {
    if(this.registerForm.invalid) return;
    
    this.authService.login();
  }
}
