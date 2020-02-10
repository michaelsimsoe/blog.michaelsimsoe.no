import { Component, OnInit, EventEmitter } from '@angular/core';

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
    this.openNavigation.emit(true);
  }
}
