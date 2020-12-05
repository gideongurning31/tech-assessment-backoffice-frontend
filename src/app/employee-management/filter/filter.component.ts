import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['../employee-management.component.scss', 'filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  options: Array<string>;

  ngOnInit() {
    this.options = [
      'Select Field',
      'Username',
      'First Name',
      'Last Name',
      'Email',
      'Birth Date',
      'Basic Salary',
      'Status',
      'Group',
    ];
  }
}
