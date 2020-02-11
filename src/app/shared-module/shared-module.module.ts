import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleTagComponent } from '../shared/article-tag/article-tag.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [ArticleTagComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticleTagComponent],
})
export class SharedModuleModule {}
