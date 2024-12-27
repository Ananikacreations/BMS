import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee.Model';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule , CommonModule],
  standalone: true,  // This makes the component standalone.
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = new Employee();

  constructor() {}

  ngOnInit(): void {
    // Initialize with some sample data or fetch from an API
    this.employees = [
      {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        phoneNumber: '123-456-7890',
        accountNumber: '123456',
        email: 'john.doe@example.com',
        department: 'IT',
        picture: 'https://via.placeholder.com/150'
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        address: '456 Oak St',
        phoneNumber: '234-567-8901',
        accountNumber: '654321',
        email: 'jane.smith@example.com',
        department: 'HR',
        picture: 'https://via.placeholder.com/150'
      }
      // Add more sample employees
    ];
  }

  openAddEmployeeDialog(): void {
    // Show the modal
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeAddEmployeeDialog(): void {
    // Hide the modal
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newEmployee.picture = reader.result as string;  // Set the employee's picture to the file's base64 string
      };
      reader.readAsDataURL(file);  // Read the file as a base64 string
    }
  }

  onSubmit(): void {
    if (true) {
      // Submit the form and add new employee to the list
      this.employees.push(this.newEmployee);
      this.newEmployee = new Employee(); // Reset the form
      this.closeAddEmployeeDialog(); // Close the modal
    }
  }
}
