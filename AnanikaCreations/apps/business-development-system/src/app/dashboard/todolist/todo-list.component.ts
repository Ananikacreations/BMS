import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports:[CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [{ name: 'Prepare Presentation' }, { name: 'Team Meeting' }];
  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask });
      this.newTask = '';
    }
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
