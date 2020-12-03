import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeManagementService } from './employee-management.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [EmployeeManagementService],
})
export class EmployeeManagementModule {}
