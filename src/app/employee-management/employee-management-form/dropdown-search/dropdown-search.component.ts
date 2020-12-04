import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: 'dropdown-search.component.html',
  styleUrls: [
    '../../employee-management.component.scss',
    '../employee-management-form.component.scss',
    'dropdown-search.component.scss',
  ],
})
export class DropdownSearchComponent implements OnInit {
  constructor() {}

  @Input() id: string;
  @Input() options: Array<string>;

  ngOnInit(): void {
    this.options = [null, ...this.options];
  }
}
