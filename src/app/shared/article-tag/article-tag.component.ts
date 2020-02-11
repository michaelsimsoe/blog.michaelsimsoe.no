import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mks-article-tag',
  templateUrl: './article-tag.component.html',
  styleUrls: ['./article-tag.component.scss'],
})
export class ArticleTagComponent implements OnInit {
  @Input() tag: any;
  constructor() {}

  ngOnInit(): void {}
}
