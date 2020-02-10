import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mks-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() postData: any;
  constructor() {}

  ngOnInit(): void {}
}
