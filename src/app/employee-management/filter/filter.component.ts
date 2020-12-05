import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelValue } from 'src/app/common/label-value.model';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['../employee-management.component.scss', 'filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  options: Array<LabelValue>;

  filterForm: FormGroup;

  ngOnInit() {
    this.options = FILTER_SELECT;
    this.initFilterForm();
  }

  initFilterForm() {
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
    } else {
      this.filterForm.controls['value' + i].disable();
    }
  }

  applyFilter() {
    console.log(this.filterForm.value);
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
  { label: 'Email', value: 'Email' },
  { label: 'Birth Date', value: 'birthDate' },
  { label: 'Basic Salary', value: 'basicSalary' },
  { label: 'Status', value: 'status' },
  { label: 'Group', value: 'group' },
];
