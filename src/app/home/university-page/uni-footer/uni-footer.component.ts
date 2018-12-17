import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInDown } from 'ng-animate';

@Component({
  selector: 'uni-footer',
  templateUrl: './uni-footer.component.html',
  styleUrls: ['./uni-footer.component.scss'],
  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown, {
      params: { timing: 0.5, delay: 0 }
    }))])
  ],
})
export class UniFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
