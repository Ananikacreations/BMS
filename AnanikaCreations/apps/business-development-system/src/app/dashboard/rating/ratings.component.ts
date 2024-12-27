import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports:[CommonModule],
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  stars = [1, 2, 3, 4, 5]; // Modify this for dynamic ratings
}
