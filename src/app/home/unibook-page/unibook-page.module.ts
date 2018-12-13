import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnibookPageComponent } from './unibook-page.component';
import { UnibookPageRoutes } from './unibook-page.routing';

@NgModule({
  imports: [
    CommonModule,
    UnibookPageRoutes
  ],
  declarations: [UnibookPageComponent]
})
export class UnibookPageModule { }
