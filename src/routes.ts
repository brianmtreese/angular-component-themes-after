import { Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { HomeComponent } from "./home/home.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Welcome',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Our Blog',
  },
];

export default routeConfig;
