import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-section',
  imports: [CommonModule],
  templateUrl: './team.section.component.html',
  styleUrls: ['./team.section.component.css']
})
export class TeamSectionComponent {
  team = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://via.placeholder.com/96' },
    { name: 'John Smith', role: 'Head of Operations', image: 'https://via.placeholder.com/96' },
    { name: 'Sarah Lee', role: 'Lead Designer', image: 'https://via.placeholder.com/96' },
    { name: 'Chris Brown', role: 'Marketing Manager', image: 'https://via.placeholder.com/96' }
  ];
}
