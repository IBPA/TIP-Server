import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public confirmationForm!: FormGroup;
  public successfullySignup!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.confirmationForm = this.fb.group({
      'email': ['', Validators.required],
      'confirmationCode': ['', Validators.required]
    });
  }

  onSubmitSignup(value: any) {
    const email = value.email;
    const password = value.password;
    this.auth.signUp(email, password)
      .subscribe(
        result => {
          this.successfullySignup = true;
        },
        error => {
          console.log(error);
          alert(error.message);
        });
  }

  onSubmitConfirmation(value: any) {
    const email = value.email;
    const confirmationCode = value.confirmationCode;
    this.auth.confirmSignUp(email, confirmationCode)
      .subscribe(
        result => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          alert(error.message);
        });
  }
}
