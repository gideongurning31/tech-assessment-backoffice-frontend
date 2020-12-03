import { Component, OnInit } from '@angular/core';
import { Employee, dummyData } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management.component.html',
  styleUrls: ['employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  constructor() {}

  dataTable: Array<Employee>;

  ngOnInit() {
    this.dataTable = dummyData;
  }

  openForm(action: string, data: Employee) {
    console.log(ActionType[action], data);
  }
}

enum ActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
