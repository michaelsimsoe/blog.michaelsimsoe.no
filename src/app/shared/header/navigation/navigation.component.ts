import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mks-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() private openNavigation: EventEmitter<boolean>;
  constructor() {}

  ngOnInit(): void {}
}
