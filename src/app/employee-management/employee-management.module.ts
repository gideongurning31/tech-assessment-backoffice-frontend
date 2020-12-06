import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementFormComponent } from './employee-management-form/employee-management-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { EmployeeMatTableComponent } from './mat-table/employee-mat-table.component';
import { EmployeeManagementService } from './employee-management.service';
import { FilterHelper } from './filter/filter-helper.service';

@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeManagementFormComponent,
    PaginationComponent,
    FilterComponent,
    EmployeeMatTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    EmployeeManagementRoutingModule,
  ],
  entryComponents: [EmployeeManagementFormComponent],
  providers: [EmployeeManagementService, FilterHelper],
})
export class EmployeeManagementModule {}
