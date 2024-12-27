import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SidebarComponent } from '../Sidebar/sidebar.component';
import { TaskkanbanComponent } from '../taskkanban/taskkanban.component';
import { TodoListComponent } from '../todolist/todo-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[SidebarComponent , TaskkanbanComponent , TodoListComponent]
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    const revenueChart = new Chart('revenueChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Revenue',
            data: [12000, 15000, 13000, 17000, 19000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      },
    });

    const customerChart = new Chart('customerChart', {
      type: 'bar',
      data: {
        labels: ['New', 'Returning', 'Churned'],
        datasets: [
          {
            label: 'Customers',
            data: [320, 180, 20],
            backgroundColor: ['#4caf50', '#2196f3', '#f44336'],
          },
        ],
      },
    });
  }
}
