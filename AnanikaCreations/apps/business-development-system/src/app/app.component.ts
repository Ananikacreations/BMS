import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { initFlowbite } from 'flowbite';

@Component({
  imports: [ RouterModule, NavbarComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
