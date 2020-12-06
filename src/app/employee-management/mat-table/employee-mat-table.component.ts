import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeManagementService } from '../employee-management.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: 'employee-mat-table.component.html',
  styleUrls: ['employee-mat-table.component.scss'],
})
export class EmployeeMatTableComponent implements OnInit, AfterViewInit {
  constructor(private employeeService: EmployeeManagementService) {
    const employee = employeeService.getAllEmployee();
    this.dataSource = new MatTableDataSource(employee);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: Array<string> = ['username', 'firstName', 'lastName', 'email', 'birthDate', 'basicSalary', 'status', 'group'];
  dataSource: MatTableDataSource<Employee>;

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
