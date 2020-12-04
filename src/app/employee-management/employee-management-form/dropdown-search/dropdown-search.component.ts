import { Component, OnInit, Input } from '@angular/core';
import { LabelValue } from 'src/app/common/label-value.model';
declare let $: any;

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
  @Input() options: Array<LabelValue>;

  ngOnInit(): void {
    $('.select2').select2();
  }

  filter() {}
}
