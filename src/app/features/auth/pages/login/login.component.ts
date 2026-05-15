import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = signal(true);
  loading = signal(false);
  errorMessage = signal('');

  loginForm!: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  togglePassword(): void {
    this.hidePassword.update(value => !value);
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const { email, password } = this.loginForm.value;
    const validEmail = 'admin@test.com';
    const validPassword = '123456';
    // console.log(this.loginForm.value);


    setTimeout(() => {
      if(email === validEmail && password === validPassword){
        console.log("Successfull Login...");
        // Save login session
        sessionStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
      }else{
        console.log('Invalid credentials');
        this.errorMessage.set("Invalid email or password")
      }
      this.loading.set(false);
    }, 1500);
  }
}