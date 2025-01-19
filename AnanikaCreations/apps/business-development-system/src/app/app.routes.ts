import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './Employee/Employee.component';

export const appRoutes: Route[] = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'employee', component: EmployeeComponent }
  ];
