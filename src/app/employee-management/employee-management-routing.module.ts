import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from '../common/session-guard.service';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SessionGuard],
    component: EmployeeManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {}
