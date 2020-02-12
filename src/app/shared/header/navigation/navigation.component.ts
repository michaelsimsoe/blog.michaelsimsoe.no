import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  HostBinding,
  Output,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'mks-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() closeNavigation: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        // this.closeNavigation.emit(true);
      }
    });
  }

  ngOnInit(): void {}

  close(): void {
    console.log('closing');
    this.closeNavigation.emit(true);
  }
}
