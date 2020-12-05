import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeManagementFormComponent } from './employee-management-form/employee-management-form.component';
import { FilterComponent, FilterObject } from './filter/filter.component';
import { PaginationComponent, Paging } from './pagination/pagination.component';
import { FilterHelper } from './filter/filter-helper.service';
import { Employee } from './employee.model';
import { dummyData } from '../dummy-data';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management.component.html',
  styleUrls: ['employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  constructor(private dialog: MatDialog, private filterHelper: FilterHelper) {}

  @ViewChild(FilterComponent) filterComponent: FilterComponent;
  @ViewChild(PaginationComponent) pageComponent: PaginationComponent;
  dataTable: Array<Employee>;
  paging: Paging;

  ngOnInit() {
    this.defaultPaging();
  }

  defaultPaging(page: number = 1) {
    const totalData = dummyData.length;
    this.paging = {
      page,
      rowPerPage: 5,
      totalRow: totalData,
      totalPage: Math.ceil(totalData / 5),
    };
    this.setPage(this.paging);
  }

  openForm(action: string, employee?: Employee) {
    this.dialog.open(EmployeeManagementFormComponent, {
      data: { employee, action: ActionType[action] },
    });
  }

  clearFilter() {
    this.dataTable = dummyData;
    this.filterComponent.initFilterForm();
  }

  applyFilter(filter: FilterObject) {
    this.dataTable = [];
    dummyData.forEach((data) => {
      if (this.filterHelper.applyFilter(filter, data)) {
        this.dataTable.push(data);
      }
    });
  }

  setPage(paging: Paging) {
    this.dataTable = [];
    this.paging = paging;
    dummyData.forEach((data, i) => {
      if (i >= (this.paging.page - 1) * this.paging.rowPerPage && i < this.paging.page * this.paging.rowPerPage) {
        this.dataTable.push(data);
      }
    });
  }
}

enum ActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
