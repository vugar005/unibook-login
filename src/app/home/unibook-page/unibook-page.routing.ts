import { UnibookPageComponent } from './unibook-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UnibookPageComponent, pathMatch: 'full' },
];

export const UnibookPageRoutes = RouterModule.forChild(routes);
