import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const session = localStorage.getItem('session');
    if (session && session === 'localSession') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
