import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementFormComponent } from './employee-management-form/employee-management-form.component';
import { EmployeeManagementService } from './employee-management.service';

@NgModule({
  declarations: [EmployeeManagementComponent, EmployeeManagementFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    EmployeeManagementRoutingModule,
  ],
  entryComponents: [EmployeeManagementFormComponent],
  providers: [EmployeeManagementService],
})
export class EmployeeManagementModule {}
