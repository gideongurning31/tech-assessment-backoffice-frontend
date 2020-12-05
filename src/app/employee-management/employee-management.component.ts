import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeManagementFormComponent } from './employee-management-form/employee-management-form.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent, Paging } from './pagination/pagination.component';
import { Employee } from './employee.model';
import { dummyData } from '../dummy-data';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management.component.html',
  styleUrls: ['employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @ViewChild(FilterComponent) filterComponent: FilterComponent;
  @ViewChild(PaginationComponent) pageComponent: PaginationComponent;
  dataTable: Array<Employee>;
  paging: Paging;

  ngOnInit() {
    this.dataTable = dummyData;
    this.setPaging();
  }

  setPaging(page: number = 1) {
    const totalData = this.dataTable.length;
    this.paging = {
      page,
      rowPerPage: 5,
      totalRow: totalData,
      totalPage: Math.ceil(totalData / 5),
    };
  }

  openForm(action: string, employee?: Employee) {
    this.dialog.open(EmployeeManagementFormComponent, {
      data: { employee, action: ActionType[action] },
    });
  }

  applyFilter(event: any) {
    console.log(event);
  }

  setPage(page: number) {}
}

enum ActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
