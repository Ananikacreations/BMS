import { Route } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'SignIn', component: RegisterComponent },
  { path: 'bms', component: RegisterComponent },
  { path: 'shubApps', component: ContactComponent },
  { path: 'education', component: ContactComponent },
  { path: 'plants', component: LoginComponent },
  { path: 'vakili', component: RegisterComponent },
  { path: 'gyan', component: RegisterComponent }
];
