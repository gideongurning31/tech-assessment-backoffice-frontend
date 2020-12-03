import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementService } from './employee-management.service';

@NgModule({
  declarations: [EmployeeManagementComponent],
  imports: [CommonModule, MatTooltipModule, EmployeeManagementRoutingModule],
  providers: [EmployeeManagementService],
})
export class EmployeeManagementModule {}
