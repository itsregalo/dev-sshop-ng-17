import { Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
