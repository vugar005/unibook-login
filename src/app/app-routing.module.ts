import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: './home/login-page/login-page.module#LoginPageModule'},
    { path: 'university', loadChildren: './home/university-page/university-page.module#UniversityPageModule'},
    { path: 'unibook', loadChildren: './home/unibook-page/unibook-page.module#UnibookPageModule'}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
