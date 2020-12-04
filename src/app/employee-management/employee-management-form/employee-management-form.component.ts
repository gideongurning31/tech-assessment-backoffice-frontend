import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GROUP_SELECT, STATUS_SELECT } from 'src/app/dummy-data';
import { LabelValue } from 'src/app/common/label-value.model';
import { Employee } from '../employee.model';
import * as moment from 'moment';
declare let $: any;

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

  ngOnInit() {
    this.title = FormHeaders[this.data.action];
    this.statusSelect = STATUS_SELECT;
    this.groupSelect = GROUP_SELECT;
    this.initForm();
    this.initDropdownSearch();
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

  submit() {
    console.log(this.form.value);
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
