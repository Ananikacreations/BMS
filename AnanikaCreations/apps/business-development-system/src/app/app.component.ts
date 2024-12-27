import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@Component({
  imports: [ RouterModule, NavbarComponent, DashboardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'business-development-system';
}
