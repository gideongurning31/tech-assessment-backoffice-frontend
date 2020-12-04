import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm: FormGroup;
  formErrors: {};

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.formErrors = { username: null, password: null };
  }

  releaseFormErrors(keys: Array<string>): void {
    keys.forEach((key) => {
      if (this.formErrors.hasOwnProperty(key)) {
        this.formErrors[key] = null;
      }
    });
  }

  submit() {
    if (this.validateForm()) {
      console.log(this.loginForm.value);
    }
  }

  private validateForm(): boolean {
    const values = this.loginForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') {
        this.formErrors[key] = `*${key} is mandatory.`;
      }
    });
    return;
  }

}
