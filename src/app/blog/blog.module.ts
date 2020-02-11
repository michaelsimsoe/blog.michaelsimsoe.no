import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleTagComponent } from '../shared/article-tag/article-tag.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    SharedModuleModule,
  ],
})
export class BlogModule {}
