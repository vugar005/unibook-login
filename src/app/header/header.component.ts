import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))])
  ],
})
export class HeaderComponent implements OnInit {
 slideInLeft = false;
 slideInRight = false;
 currentIndex = '01';
 previousIndex = '';
 constructor(private router: Router, private route: ActivatedRoute) { }

 ngOnInit() {
   this.router.events
   .pipe(
    filter((event) => event instanceof NavigationEnd)
   ).subscribe(res =>  {
      const routeData = this.route.root.firstChild.snapshot.firstChild.data;
     if (routeData) {
       this.previousIndex = this.currentIndex;
       this.currentIndex = routeData.index;
       const indexDiff = (+this.previousIndex) - (+this.currentIndex) ;
       console.log(indexDiff);
       const root = document.documentElement;
       const style = getComputedStyle(document.body);
       const result = 25 * indexDiff;
     //  const result = 25 * indexDiff;
       console.log(Math.abs(parseInt(style.getPropertyValue('--uni-global-nav-transform'), 10)) * indexDiff) ;
      root.style.setProperty('--uni-global-nav-transform', result + 'vw');
     }
   });
 }
}
