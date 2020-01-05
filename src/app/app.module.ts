import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { ArticleLinkComponent } from "./home/article-link/article-link.component";
import { SkillCircleComponent } from "./home/skill-circle/skill-circle.component";
import { ArticlesComponent } from "./articles/articles.component";
import { Routes } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    ArticleLinkComponent,
    SkillCircleComponent,
    ArticlesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
