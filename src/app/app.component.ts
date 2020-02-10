import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

declare let ga: Function;
@Component({
  selector: 'mks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'michaelsimsoe';
  posts$: Observable<ScullyRoute[]>;

  constructor(public router: Router, private srs: ScullyRoutesService) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.posts$ = this.srs.available$;
  }
}
