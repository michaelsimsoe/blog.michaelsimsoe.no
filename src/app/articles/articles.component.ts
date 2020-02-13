import { Component, OnInit, Input } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mks-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  blogPostData$: Observable<ScullyRoute[]>;
  @Input() max: number;
  @Input() tags: string;
  @Input() search: string;

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnChanges(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.blogPostData$ = this.srs.available$.pipe(
      map(routeList => {
        return routeList
          .filter((route: ScullyRoute) => route.route.startsWith(`/`))
          .filter((route: ScullyRoute) => route.publish !== false)
          .filter((route: ScullyRoute) => route.title !== undefined)
          .reverse();
      }),
      map(routeList => {
        if (!this.tags) {
          return routeList;
        }
        return routeList.filter((route: ScullyRoute) =>
          route.tags.includes(this.tags)
        );
      }),
      map(routeList => {
        if (!this.search) {
          return routeList;
        }
        return routeList.filter((route: ScullyRoute) => {
          const searchTerm = this.search.toLowerCase();
          return (
            route.tags.includes(this.search) ||
            route.title.toLowerCase().includes(searchTerm) ||
            route.description.toLowerCase().includes(searchTerm) ||
            route.author.toLowerCase().includes(searchTerm)
          );
        });
      }),
      map(routeList => {
        if (this.max) {
          routeList = routeList.slice(0, this.max);
        }
        return routeList;
      })
    );
  }
}
