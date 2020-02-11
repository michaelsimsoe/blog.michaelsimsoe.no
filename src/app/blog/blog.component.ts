import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HighlightService } from '../highlight.service';
import { MetaService } from '../meta-service.service';

declare var ng: any;

@Component({
  selector: 'mks-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, AfterViewChecked {
  post$: Observable<ScullyRoute>;
  location: null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService,
    private srs: ScullyRoutesService,
    private metaService: MetaService
  ) {}

  ngOnInit() {
    this.post$ = this.srs.available$.pipe(
      map(routeList => {
        return routeList.filter(
          (route: ScullyRoute) =>
            route.route.startsWith(`/`) &&
            route.route.includes(this.route.snapshot.params.slug) &&
            route.title !== undefined
        );
      }),
      map(currentPostData => {
        return currentPostData[0];
      }),
      tap(post => {
        this.metaService.createMetaDataForPost(post);
      })
    );
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  shareTextContent() {
    return encodeURI(location.href);
  }
}
