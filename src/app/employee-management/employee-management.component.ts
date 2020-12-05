import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeManagementFormComponent } from './employee-management-form/employee-management-form.component';
import { FilterComponent, FilterObject } from './filter/filter.component';
import { PaginationComponent, Paging } from './pagination/pagination.component';
import { EmployeeManagementService } from './employee-management.service';
import { FilterHelper } from './filter/filter-helper.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: 'employee-management.component.html',
  styleUrls: ['employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: EmployeeManagementService,
    private filterHelper: FilterHelper) {}

  @ViewChild(FilterComponent) filterComponent: FilterComponent;
  @ViewChild(PaginationComponent) pageComponent: PaginationComponent;
  dataTable: Array<Employee>;
  paging: Paging;
  startRow: number;

  ngOnInit() {
    this.defaultPaging();
  }

  defaultPaging(page: number = 1) {
    const totalData = this.service.getAllEmployee().length;
    this.paging = {
      page,
      rowPerPage: 5,
      totalRow: totalData,
      totalPage: Math.ceil(totalData / 5),
    };
    this.setPage(this.paging);
  }

  openForm(action: string, employee?: Employee) {
    const dialogRef = this.dialog.open(EmployeeManagementFormComponent, {
      data: { employee, action: ActionType[action] },
    });

    dialogRef.componentInstance.successSubmit.subscribe((message: string) => {
      dialogRef.close();
      this.snackAlert(SubmitMessage[message]);
    });
  }

  clearFilter() {
    this.dataTable = this.service.getAllEmployee();
    this.filterComponent.initFilterForm();
    this.setPage(this.paging);
  }

  applyFilter(filter: FilterObject) {
    this.dataTable = [];
    this.service.getAllEmployee().forEach((data) => {
      if (this.filterHelper.applyFilter(filter, data)) {
        this.dataTable.push(data);
      }
    });
  }

  setPage(paging: Paging) {
    this.dataTable = [];
    this.paging = paging;
    this.service.getAllEmployee().forEach((data, i) => {
      if (i >= (this.paging.page - 1) * this.paging.rowPerPage
      && i < this.paging.page * this.paging.rowPerPage) {
        if (this.dataTable.length === 0) {
          this.startRow = i;
        }
        this.dataTable.push(data);
      }
    });
  }

  private snackAlert(message: string): void {
    this.snackBar.open(message, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}

enum ActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

enum SubmitMessage {
  CREATE = 'New employee data has been added.',
  UPDATE = 'Employee data has been updated.',
  DELETE = 'Employee data has been deleted.'
}
