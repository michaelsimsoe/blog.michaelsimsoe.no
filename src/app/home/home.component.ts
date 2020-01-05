import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "home");
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "home");
  }
}
