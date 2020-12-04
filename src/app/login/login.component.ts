import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginPayload } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  loginForm: FormGroup;
  invalidCreds: boolean;

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.invalidCreds = false;
  }

  submit() {
    if (this.loginForm.valid) {
      this.onLogin(this.loginForm.value);
    }
  }

  private onLogin(credentials: LoginPayload) {
    this.invalidCreds = !this.loginService.login(credentials);
    if (!this.invalidCreds) {
      this.router.navigate(['/']);
    }
  }
}
