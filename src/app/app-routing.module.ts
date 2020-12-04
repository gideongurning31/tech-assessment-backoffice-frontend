import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './common/session-guard.service';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './common/not-found-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent,
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee-management/employee-management.module').then(load => load.EmployeeManagementModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
