import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './Contact.component.html',
  styleUrl: './Contact.component.css',
})
export class ContactComponent {
  contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "contact@yourcompany.com",
    address: "123 Innovation Street, Tech City, USA",
    hours: "Monday - Friday: 9 AM - 6 PM"
  };
}
