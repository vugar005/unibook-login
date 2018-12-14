import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss']
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
