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

  }
};
  constructor() { }

  ngOnInit() {
  }

}
