import { UniversityPageComponent } from './university-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UniversityPageComponent },
];

export const UniversityPageRoutes = RouterModule.forChild(routes);
