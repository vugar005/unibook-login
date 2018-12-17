import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'unibook-page',
  templateUrl: './unibook-page.component.html',
  styleUrls: ['./unibook-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 0.5, delay: 0 }
    }))])
  ],
})
export class UnibookPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
