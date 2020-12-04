import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Employee } from '../employee.model';

const STATUS_SELECT = ['01', '02', '03'];
const GROUP_SELECT = ['AVENGERS', 'JUSTICE LEAGUE', 'DISNEY'];

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management-form.component.html',
  styleUrls: [
    '../employee-management.component.scss',
    'employee-management-form.component.scss',
  ],
})
export class EmployeeManagementFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeFormData) {}

  title: string;
  form: FormGroup;
  statusSelect: Array<string>;
  groupSelect: Array<string>;

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

  cancel() {}
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
