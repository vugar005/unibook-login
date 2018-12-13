import { UniversityPageRoutes } from './university-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityPageComponent } from './university-page.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  imports: [
    CommonModule,
    UniversityPageRoutes,
    SwiperModule
  ],
  declarations: [UniversityPageComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class UniversityPageModule { }
