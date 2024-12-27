import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features.section.component.html',
  imports: [CommonModule],
  styleUrls: ['./features.section.component.css']
})
export class FeaturesSectionComponent {
  features = [
    {
      title: 'Expertise',
      description: 'Our team has decades of experience in various industries.',
      iconClass: 'w-12 h-12',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Innovation',
      description: 'We bring you the latest technologies.',
      iconClass: 'w-12 h-12',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Support',
      description: 'Our dedicated team ensures your satisfaction.',
      iconClass: 'w-12 h-12',
      iconColor: 'text-green-600'
    }
  ];
}
