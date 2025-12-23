import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  errorMessage = '';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("Load login");
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    debugger;

    this.loading = true;
    this.errorMessage = '';

    /* MOCK LOGIN — replace later with real API */
    setTimeout(() => {
      const { email, password } = this.loginForm.value;

      debugger;
      if (email === 'user@test.com' && password === '123456') {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/app/dashboard']);
        debugger;
      } else {
        this.errorMessage = 'Invalid email or password';
      }

      this.loading = false;
    }, 800);
  }

  goToRegister(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/register']);
  }
}
