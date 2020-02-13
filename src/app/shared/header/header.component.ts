import {
  Component,
  OnInit,
  EventEmitter,
  AfterViewInit,
  HostBinding,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'mks-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private openNavigation: EventEmitter<boolean> = new EventEmitter();
  navigationOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavigation(): void {
    this.navigationOpen = !this.navigationOpen;
  }
}
