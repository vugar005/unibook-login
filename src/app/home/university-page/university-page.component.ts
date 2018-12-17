import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 1, delay: 0 }
    }))])
  ],
})
export class UniversityPageComponent implements OnInit {
  config = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  speed: 2500,
  autoplay: {
    delay: 2000,
  },
};
  constructor() { }

  ngOnInit() {
  }

}
