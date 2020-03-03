import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './shared/header/navigation/navigation.component';
import { ArticlePreviewComponent } from './home/article-preview/article-preview.component';
import { LogoComponent } from './shared/header/logo/logo.component';
import { ArticleTagComponent } from './shared/article-tag/article-tag.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NavigationComponent,
    ArticlePreviewComponent,
    LogoComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    SharedModuleModule,
  ],
  exports: [ArticleTagComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
