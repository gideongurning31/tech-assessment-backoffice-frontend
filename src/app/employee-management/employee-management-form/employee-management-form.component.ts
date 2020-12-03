import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management-form.component.html',
  styleUrls: ['../employee-management.component.scss'],
})
export class EmployeeManagementFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeFormData) {}

  title: string;
  form: FormGroup;
  employee: Employee;

  ngOnInit() {
    this.initForm();
    this.title = FormHeaders[this.data.action];
    console.log(this.data.employee);
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
