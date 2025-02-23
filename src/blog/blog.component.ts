import { Component, signal } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [ModalComponent, SignUpFormComponent]
})
export class BlogComponent {
  protected signUpModalOpen = signal(false);
}