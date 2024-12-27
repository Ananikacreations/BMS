import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true, // Indicates this is a standalone component
  imports: [ReactiveFormsModule], // Import ReactiveFormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,15}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
