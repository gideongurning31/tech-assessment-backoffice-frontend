import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  {
    // TODO: ROUTE-GUARD HERE
    path: '',
    component: EmployeeManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {}
