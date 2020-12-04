import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  mobileNav: boolean;

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  logout() {
    //TODO: destroy user's session/localstorage here
    this.router.navigate(['login']);
  }
}
