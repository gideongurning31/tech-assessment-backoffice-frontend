import { Component, OnInit, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GROUP_SELECT, STATUS_SELECT } from 'src/app/dummy-data';
import { EmployeeManagementService } from '../employee-management.service';
import { LabelValue } from 'src/app/common/label-value.model';
import { Employee } from '../employee.model';
import * as moment from 'moment';
declare let $: any;
const EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management-form.component.html',
  styleUrls: [
    '../employee-management.component.scss',
    'employee-management-form.component.scss',
  ],
})
export class EmployeeManagementFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EmployeeFormData,
    private dialogRef: MatDialogRef<EmployeeManagementFormComponent>,
    private service: EmployeeManagementService) {}

  title: string;
  form: FormGroup;
  statusSelect: Array<LabelValue>;
  groupSelect: Array<LabelValue>;
  todayDate: string;
  fieldErrors: Array<string>;
  successSubmit: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.title = FormHeaders[this.data.action];
    this.statusSelect = STATUS_SELECT;
    this.groupSelect = GROUP_SELECT;
    this.initForm();
    this.initDropdownSearch();
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    if (this.data.employee) {
      this.setFormValue();
    }
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(EMAIL_REGEX)]),
      birthDate: new FormControl(null, Validators.required),
      basicSalary: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      group: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
    this.fieldErrors = [];
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
    } else if (this.data.action === 'UPDATE') {
      this.form.controls.username.disable();
    }
  }

  checkEmail() {
    if (this.form.controls.email.errors &&
      this.form.controls.email.errors.pattern &&
      this.fieldErrors.indexOf('emailPattern') === -1) {
        this.fieldErrors.push('emailPattern');
    }
  }

  removeError(err: string) {
    const index = this.fieldErrors.indexOf(err);
    if (index > -1) {
      this.fieldErrors.splice(index, 1);
    }
  }

  submit() {
    switch (this.data.action) {
      case 'CREATE': this.service.createEmployee(this.form.value); break;
      case 'UPDATE': this.service.editEmployee(this.form.value.username, this.form.value); break;
      case 'DELETE': this.service.deleteEmployee(this.form.value.username); break;
    }
    this.successSubmit.emit(this.data.action);
  }

  cancel() {
    this.dialogRef.close();
    this.initForm();
  }

  private initDropdownSearch() {
    $('.select2').select2({ placeholder: 'Select Group' });
    $('#inputGroup').on('select2:select', event => {
      this.form.controls.group.setValue(event.params.data.id);
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
