import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SignUpFormComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}