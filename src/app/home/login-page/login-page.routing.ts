import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
];

export const LoginPageRoutes = RouterModule.forChild(routes);
