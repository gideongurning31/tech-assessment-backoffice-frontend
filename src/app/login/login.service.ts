import { Injectable } from '@angular/core';
import { dummyData } from '../dummy-data';
import { dummyData2 } from '../dummy-data2';

@Injectable()
export class LoginService {
  constructor() {}

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
    localStorage.setItem('data', JSON.stringify([...dummyData, ...dummyData2]));
  }
}

export interface LoginPayload {
  username: string;
  password: string;
}
