import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private route: Router) {}

  dummyUser = { username: 'user', password: 'pass123' };

  login(payload: LoginPayload): boolean {
    if (!this.authenticate(payload)) {
      return false;
    }
    this.setUserSession();
    return true;
  }

  private authenticate(payload: LoginPayload) {
    return (
      payload.username === this.dummyUser.username &&
      payload.password === this.dummyUser.password
    );
  }

  private setUserSession(): void {
    localStorage.clear();
    localStorage.setItem('session', 'localSession');
  }
}

export interface LoginPayload {
  username: string;
  password: string;
}
