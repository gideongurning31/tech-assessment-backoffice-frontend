import { Component, OnInit } from '@angular/core';
import { Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelValue } from 'src/app/common/label-value.model';
import { Employee } from '../employee.model';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import * as moment from 'moment';

const STATUS_SELECT = [
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
];

const GROUP_SELECT = [
  { label: 'AVENGERS', value: 'AVENGERS' },
  { label: 'JUSTICE LEAGUE', value: 'JUSTICE LEAGUE' },
  { label: 'DISNEY', value: 'DISNEY' },
];

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management-form.component.html',
  styleUrls: [
    '../employee-management.component.scss',
    'employee-management-form.component.scss',
  ],
})
export class EmployeeManagementFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeFormData, private dialogRef: MatDialogRef<EmployeeManagementFormComponent>) {}

  title: string;
  form: FormGroup;
  statusSelect: Array<LabelValue>;
  groupSelect: Array<LabelValue>;

  @ViewChild(DropdownSearchComponent) dropdownSearch: DropdownSearchComponent;

  ngOnInit() {
    this.title = FormHeaders[this.data.action];
    this.statusSelect = STATUS_SELECT;
    this.groupSelect = GROUP_SELECT;
    this.initForm();
    if (this.data.employee) {
      this.setFormValue();
    }
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      basicSalary: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      group: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  setFormValue() {
    Object.keys(this.data.employee).forEach((key) => {
      let value = this.data.employee[key];
      if (key === 'birthDate') {
        value = moment(value).format('YYYY-MM-DD');
      }
      this.form.controls[key].setValue(value);
    });

    if (this.data.action === 'DELETE') {
      this.form.disable();
    }
  }

  submit() {}

  cancel() {
    this.dialogRef.close();
    this.initForm();
  }
}

interface EmployeeFormData {
  action: string;
  employee: Employee;
}

enum FormHeaders {
  CREATE = 'Add New Employee Data',
  UPDATE = 'Update Employee Data',
  DELETE = 'Delete Employee Data?',
}
