import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onMenuBtnClick() {
    console.log("click");
    const LOGO = document.getElementById("logo");
    document;

    document.getElementById("menu").classList.toggle("main-menu--open");
    document
      .getElementById("m-c__b")
      .classList.toggle("main-content__background--slide");
    document.getElementById("menubutton").classList.toggle("menu-btn--active");
    LOGO.classList.toggle("logo--active");
  }
}
