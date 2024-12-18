import { Route } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { EmployeeComponent } from './Employee/Employee.component';


export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'employee', component: EmployeeComponent },
];
