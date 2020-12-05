import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelValue } from 'src/app/common/label-value.model';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['../employee-management.component.scss', 'filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  @Output() applyFilter: EventEmitter<any> = new EventEmitter();
  options: Array<LabelValue>;
  filterForm: FormGroup;
  type1: string;
  type2: string;

  ngOnInit() {
    this.options = FILTER_SELECT;
    this.initFilterForm();
  }

  initFilterForm() {
    this.type1 = 'text';
    this.type2 = 'text';
    this.filterForm = new FormGroup({
      key1: new FormControl('', Validators.required),
      value1: new FormControl(null, Validators.required),
      key2: new FormControl(''),
      value2: new FormControl(null),
    });
    this.filterForm.controls.value1.disable();
    this.filterForm.controls.value2.disable();
  }

  onSelectKey(i: number) {
    if (this.sanitize(this.filterForm.controls['key' + i].value)) {
      this.filterForm.controls['value' + i].enable();
      this['type' + i] = FilterType[this.filterForm.controls['key' + i].value] || 'text';
    } else {
      this.filterForm.controls['value' + i].disable();
      this['type' + i] = 'text';
    }
    this.filterForm.controls['value' + i].reset();
  }

  onApplyFilter() {
    const filter = this.filterForm.value;
    const filterObject = {};
    if (filter.key1 && filter.value1) {
      filterObject[filter.key1] = filter.value1;
    }

    if (filter.key2 && filter.value2) {
      filterObject[filter.key2] = filter.value2;
    }
    this.applyFilter.emit(filterObject);
  }

  private sanitize(value: any) {
    if (value === '' || value === [] || value === {}) {
      return null;
    } else {
      return value;
    }
  }
}

const FILTER_SELECT = [
  { label: 'Select Field', value: '' },
  { label: 'Username', value: 'username' },
  { label: 'First Name', value: 'firstName' },
  { label: 'Last Name', value: 'lastName' },
  { label: 'Email', value: 'email' },
  { label: 'Birth Date', value: 'birthDate' },
  { label: 'Basic Salary', value: 'basicSalary' },
  { label: 'Status', value: 'status' },
  { label: 'Group', value: 'group' },
];

enum FilterType {
  email = 'email',
  birthDate = 'date',
  basicSalary = 'number',
}
