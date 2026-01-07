import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    // if (this.loginForm.invalid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }
    // debugger;

    // this.loading = true;
    // this.errorMessage = '';

    // /* MOCK LOGIN — replace later with real API */
    // setTimeout(() => {
    //   const { email, password } = this.loginForm.value;

    //   debugger;
    //   if (email === 'user@test.com' && password === '123456') {
    //     localStorage.setItem('loggedIn', 'true');
    //     this.router.navigate(['/app/dashboard']);
    //     debugger;
    //   } else {
    //     this.errorMessage = 'Invalid email or password';
    //   }

    //   this.loading = false;
    // }, 800);
  }
}
