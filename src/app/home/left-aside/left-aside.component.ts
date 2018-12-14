import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss']
})
export class LeftAsideComponent implements OnInit {
  currentIndex = '01';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
    .pipe(
     filter((event) => event instanceof NavigationEnd)
    ).subscribe(res =>  {
       const routeData = this.route.root.firstChild.snapshot.firstChild.data;
      if (routeData) {
        this.currentIndex = routeData.index;
      }
    });
  }

}
