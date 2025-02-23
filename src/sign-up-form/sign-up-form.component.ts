import { Component, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SignUpFormComponent {
  protected signUpForm = new FormGroup<SignUpForm>({
    name: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required
    }),
    email: new FormControl<string>('', {
      nonNullable: true, 
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });
}
