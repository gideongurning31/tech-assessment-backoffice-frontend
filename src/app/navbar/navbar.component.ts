import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {
    router.events.subscribe(event => (this.showNav = this.router.url !== '/login'));
  }

  showNav: boolean;
  mobileNav: boolean;

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
