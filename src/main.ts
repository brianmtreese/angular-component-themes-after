import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import 'zone.js';
import { provideRouter, RouterModule } from '@angular/router';
import routeConfig from './routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Sign Up</a></li>
        <li><a routerLink="blog">Blog</a></li>
      </ul>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      align-items: flex-start;
      display: flex;
      justify-content: center;
    }
  `]
})
export class App {
}

bootstrapApplication(App,{
  providers: [
    provideAnimationsAsync(),
    provideRouter(routeConfig)
  ]
});
